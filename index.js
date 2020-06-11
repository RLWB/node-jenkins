const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send({
        name: '123'
    })
})

app.listen(8000)