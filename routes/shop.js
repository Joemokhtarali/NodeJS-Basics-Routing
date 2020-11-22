const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    return res.send('<h1>Hello to my Express Page</h1>')
})

module.exports = router