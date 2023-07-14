const express = require('express');
const morgan = require('morgan');


const app = express();
app.use(express.json());
// app.use(morgan('combined');
app.use(morgan(function (tokens, req, res) {
  // console.log(tokens);
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms',
    JSON.stringify(req.body)
  ].join(' ')
}))

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

const checkDuplicate = (name) => {
  const nameArray = phoneBookEntries.map(entry => entry.name.toLowerCase());

  return nameArray.includes(name.toLowerCase());
}

app.get('/api/persons', (req, res) => {
  res.json(phoneBookEntries);
});


app.post('/api/persons', (req, res) => {
  const {name, number} = req.body;

  if (!name || !number) {
    return res.status(400).json({
      error: "Name or number is missing!"
    });
  } else if (checkDuplicate(name)) {
    return res.status(400).json({
      error: "Name already exists!"
    });
  }

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