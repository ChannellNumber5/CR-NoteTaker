const fs = require('fs');
const express = require('express');
const path = require('path'); //controls or parses file paths, to my understanding

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.static('public'));

app.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/notes.html'))
    ); // should return the notes.html file

app.get('api/notes', (req, res) => {}) //should read file and return all saved notes as JSON

app.post('/api/notes', (req, res) => {}) //should receive new note and save on the request body and add it to db.json file

app.delete('/api/notes', (req, res) => {}) // should delete selected note that's passed into the post? or mybae it will filter through the posts and delete based on matching id the id of the selected post with the note stored in the database

app.listen(PORT, () => console.log(`Server is activated! App listening at ${PORT}`));