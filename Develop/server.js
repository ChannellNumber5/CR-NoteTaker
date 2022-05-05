const fs = require('fs');
const express = require('express');

const app = express();

const PORT = 3001;

app.use(express.static('public'));

app.get('/notes', ) // should return the notes.html file

app.get('api/notes', ) //should read file and return all saved notes as JSON

app.post('/api/notes') //should receive new note and save on the request body and add it to db.json file