const express = require('express');

const db = require('../data/helpers/userDb')

const router = express.Router();

router.get('/', (req, res) => {
    db.get()
    .then(users => {
        res.status(200).send(users)
    })
    .catch(() => {
        res.status(500).json({error: "Oops, something went wrong on our end."})
    })
})

router.post('/newUser', (req, res) => {
    newUser = req.body
    db.insert(newUser)
    .then(post => {
        res.status(200).json(post)
    })
    .catch(() => {
        res.status(500).json({error: 'Something went wrong'})
    })
})

router.put('/:id', (req, res) => {
    userId = req.params.id
    user = db.getById(u => u.id == req.params.id)
    db.update(user, userId)
    .then(user => {
        res.status(200).send(user)
    })
    .catch(() => {
        res.status(500).send('Something is wrong on our end')
    })
})

router.delete('/delete/:id', (req, res) => {
    userId = req.params.id
    db.remove(userId)
    .then(() => {
        res.status(200).send('User deleted')
    })
    .catch(() => {
        res.status(500).send('We cannot delete this user')
    })
})

module.exports = router