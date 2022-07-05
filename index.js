//Requiring Express - Refer to Jade Doe's Handy Express Checklist
const express = require('express')
const app =express()
//ENV entry Point
require('dotenv').config()
//Body Parser for JSON
app.use(express.json())

app.get('/', (req,res)=>{
    res.send("Server up!")
})

// Listen for connections.
app.listen(3000, () => {
console.log('I am awake! http://localhost:3000/')
})