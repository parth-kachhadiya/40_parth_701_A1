const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.listen(3030, () => {
    console.log("🌐 Flying on http://localhost:3030")
})