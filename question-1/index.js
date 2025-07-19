const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.get('/gethello', (req, res) => {
    res.send("Hello node js!!")
})

app.get('/greet', (req, res) => {
    res.sendFile(path.join(__dirname, 'greet.html'))
})

app.listen(3030, () => {
    console.log(`🌐 Flying on http://localhost:3030`)
})

