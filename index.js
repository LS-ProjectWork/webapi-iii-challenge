require('dotenv').config();
const express = require('express');
const server = express()

const port = process.env.PORT

function upperCase(req, res, next){
    if(req.name == req.name.toUpperCase) {
        next()
    } else {
        res.status(404).send('Name needs to be uppercased')
    }
}

server.use('/', (req, res) => {
    res.status(200).send('This is the home page')
})

server.listen(port, () => {
    console.log(`server is on port ${port}`)
})
