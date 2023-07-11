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

app.get('/api/persons', (req, res) => {
  res.json(phoneBookEntries);
});

app.delete('/api/persons/:id', (req, res) => {

  const entry = phoneBookEntries.find((person) => {
    return person.id === Number(req.params.id);
  });

  if (entry) {

    const entry = phoneBookEntries.filter((person) => {
      return person.id !== Number(req.params.id);
    });

    phoneBookEntries = entry;

    res.status(204).end();

  } else {
    res.status(404).json({
      message: "Invalid ID"
    });
  }
});

app.listen(3001, () => {
  console.log('Server is running on port 3001...');
});