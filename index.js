const express = require('express');
const server = express()

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

server.listen(6000, () => {
    console.log('server is on port 6000')
})
