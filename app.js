const http = require('http')

const express = require('express')

const app = express()

app.use('/product', (req, res, next) => {
    console.log('In another middle');
    res.send('<h1>The Product page</h1>')
})

app.use('/', (req, res, next) => {
    console.log('In another middle');
    res.send('<h1>Hello</h1>')
})

// const routes = require('../routes')

// const server = http.createServer(app)

// server.listen(3000);

app.listen(3000)