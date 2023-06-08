const express = require('express')
const {
    getElective,
    getsingleElective,
    addElective,
    updateElective,
    deleteElective
} = require('../Controllers/electiveControllers')

const router = express.Router()

router.get('/', getElective)

router.get('/:id', getsingleElective)

router.post('/', addElective)

router.patch('/:id', updateElective)

router.delete('/:id', deleteElective)

module.exports = router