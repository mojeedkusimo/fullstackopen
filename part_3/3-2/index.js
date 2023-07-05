const express = require('express');

const app = express();

let phoneBookEntries = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
];

const phoneBookCount = phoneBookEntries.length;
const date = new Date;

app.get('/info', (req, res) => {
    res.send(`Phonebook has info for ${phoneBookCount} people<br/> ${date}`);
});

app.listen(3001, () => {
    console.log('Server is running on port 3001...');
});