require('dotenv').config() // to add the .env file

const express = require('express') // == import express from "express"
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/nitin', (req, res) => {
  res.send('Hello sir')
})
app.get('/nikhil', (req, res) => {
  res.send('Hello 2 in 1')
})

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})