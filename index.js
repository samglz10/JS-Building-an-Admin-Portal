//Requiring Express - Refer to Jade Doe's Handy Express Checklist
const express = require('express')
const app =express()
//ENV entry Point
require('dotenv').config()
//Body Parser for JSON
const books = require('./db.json')
app.use(express.json())

//Main page
app.get('/', (req,res)=>{
    res.send("Server up!")
})

app.get('/books', (req, res)=> {
    //res.send("Books here!")
    res.json(books)
})

// Listen for connections.
app.listen(3000, () => {
console.log('I am awake! http://localhost:3000/')
})