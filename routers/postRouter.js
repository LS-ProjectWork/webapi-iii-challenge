const express = require('express');

const db = require('../data/helpers/postDb');

const router = express.Router();

router.get('/', (req, res) => {
    db.get()
    .then(post => {
        res.status(200).send(post)
    })
    .catch(() => {
        res.status(500).send('Could not retrieve posts')
    })
})

router.post('/newPost', (req, res) => {
    newPost = req.body
    db.insert(newPost)
    .then(post => {
        res.status(200).send(post)
    })
    .catch(() => [
        res.status(500).send('Could not add this post')
    ])
})

router.put('/update/:id', (req, res) => {
    postId = req.params.id
    userId = req.params.user_id
    text = req.body.text
    db.update(postId, text)
})