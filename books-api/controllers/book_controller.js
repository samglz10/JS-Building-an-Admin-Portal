//Requiring Express - Refer to Jade Doe's Handy Express Checklist
const express = require('express')
const router =express.Router()
const app =express()
const Books = require('../models/index')

// Index
//Left off GET Route Instructions
router.get('/', (req,res) => {
    res.send('/db.json')
    console.log("JSON here")
})

router.get('/index', (req,res) => {
    res.send("JSON file here")
    console.log("Index here")
 
})


module.exports = Router



