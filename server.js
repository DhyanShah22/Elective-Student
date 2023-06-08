const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const electiveRoutes = require('./Routes/electiveRoutes')

const app = express()

app.use(express.json())

app.use((req,res,next) => {
    console.log(req.path,req.method)
    next()
})

app.use('/api/electiveroutes', electiveRoutes)

mongoose.connect(process.env.MONG_URI)
   .then ( () => {
      app.listen(process.env.PORT, () => {
          console.log('Connected to Db and listening to port', process.env.PORT)
      })
   })
   .catch((error) => {
    console.log(error)
   })