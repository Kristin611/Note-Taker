const router = require('express').Router()
const { readFromFile, writeToFile, readAndAppend } = require('../helpers/fsUtils')
const db = require('../db/db.json')

router.get('/notes', (req, res) => {
    readFromFile('./db/db.json').then((data) =>  res.json(JSON.parse(data)))
   
})


module.exports = router; 