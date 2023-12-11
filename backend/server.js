const express = require('express')
const cors = require('cors')
const app = express()


app.use(express.json())
app.use(cors())
require('./dbconnection/connection')

const port = 3001






app.listen(port,()=>{
    console.log(`Port Successfully Connected to ${port}`)
})

const router = require('./routes/route')
app.use(router)