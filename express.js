'use strict'

const express = require('express')
const app = express()

const ip = '127.0.0.1'
const port = 8082

app.use(express.static('public'))

app.listen(port, ip, () => {
    console.log(`Server running at http://${ip}:${port}/`)
})

app.get('/login', (req, res) => {
    const username = req.query.username
    const password = req.query.password

    const userDatabase = [
        {username: 'loomann', password: 'iloveloo'},
        {username: 'otti', password: 'imfluss' }
    ]

    const isValidUser = (username, password) => {

        let isValid = false

        userDatabase.forEach((user) => {
            if (user.username == username && user.password == password) {
                isValid = true
            }
        })

        return isValid
    }
    
    res.json({ success: isValidUser(username, password) })
})