const fs = require('fs');
const express = require('express');
const createId = require('./assets/createId.js')
const path = require('path'); //controls or parses file paths, to my understanding

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.static('public'));

app.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/notes.html'))
    ); // should return the notes.html file

app.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            const savedNotes = JSON.parse(data);
            res.json(savedNotes);
        }
    })
}); //should read file and return all saved notes as JSON

app.post('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf-8', (err, data) => {
        if (err) {
            console.error(err)
            res.send.status(500);
        } else {
            const parsedNotes = JSON.parse(data);
            const newNote = req.body;
            console.log(newNote);
            const parsedNewNote = JSON.parse(newNote);
            const noteIDs = parsedNotes.map(el => { return el.id});
            console.log(noteIDs);
            parsedNewNote.id = createId(noteIDs);
            parsedNotes.unshift(parsedNewNote);
            fs.writeFile('./db/db.json', JSON.stringify(parsedNotes), (err) => err ? console.error(err) : console.log('Notes saved successfully!'));
            res.send.status(200)
        }
    })
}) //should receive new note and save on the request body and add it to db.json file

app.delete('/api/notes', (req, res) => {}) // should delete selected note that's passed into the post? or mybae it will filter through the posts and delete based on matching id the id of the selected post with the note stored in the database

app.listen(PORT, () => console.log(`Server is activated! App listening at ${PORT}`));