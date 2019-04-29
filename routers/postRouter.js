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
    text = req.body.text
    db.update(postId, text)
    .then(post => {
        res.status(200).send('The post has been updated')
    })
    .catch(() => {
        res.status(500).send('Cannot update post')
    })
})

router.delete('/delete/:id', (req, res) => {
    postId = req.params.id
    db.remove(postId)
    .then(post => {
        res.status(200).send('The post has been deleted')
    })
    .catch(() => {
        res.status(500).send('We could not delete this post')
    })
})

modulele.exports = router