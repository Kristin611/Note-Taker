const router = require('express').Router()
const { readFromFile } = require('../helpers/fsUtils')
const db = require('../db/db.json')
const fs = require('fs');
const path = require('path')
const { v4:uuidv4 } = require('uuid')


router.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) =>  res.json(JSON.parse(data)))
   
});

router.post('/', (req, res) => {
   const notesData = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'))
   const newNotes = {
    title: req.body.title,
    text: req.body.text, 
    id: uuidv4()
   } 
   notesData.push(newNotes)
   fs.writeFileSync('./db/db.json', JSON.stringify(notesData))
   res.json(notesData)
});

router.delete('/:id', (req, res) => {
    const notesData = fs.readFileSync('./db/db.json', 'utf8')
    const parsedNotes = JSON.parse(notesData)
    const notDeletedNotes = parsedNotes.filter((note) => {
        return note.id !== req.params.id 

    })
    fs.writeFileSync('./db/db.json', JSON.stringify(notDeletedNotes))
    res.json({message: 'note deleted'})
})




module.exports = router; 