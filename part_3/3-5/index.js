const express = require('express');

const app = express();
app.use(express.json());

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

const generateID = () => {

  let newID = Math.round(Math.random() * 5000);
  return newID;
}

app.post('/api/persons', (req, res) => {
  const {name, number} = req.body;

  const id = generateID();

  const newEntry = {
    id,
    name,
    number
  };

  phoneBookEntries = phoneBookEntries.concat(newEntry);

  res.json(phoneBookEntries);
});

app.listen(3001, () => {
  console.log('Server is running on port 3001...');
});