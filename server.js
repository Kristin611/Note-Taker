const express = require('express');
const path = require('path');
const api = require('./routes/index.js');
const PORT = process.env.port || 3001;

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

//catchall to access all files in public folder
app.use(express.static('public'));



//to create a route to notes.html file 
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, './public/notes.html'))
);

//to create a wildcard route that will send users to index.html
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, './public/index.html'))
);


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);