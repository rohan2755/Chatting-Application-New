const express = require('express')
const cors = require('cors')
require('dotenv').config()
const router = require('./routes/index')
const mongoose = require('mongoose')
const cookiesParser = require('cookie-parser')
const { app,server } = require('./socket/index')

// const app = express()

app.use(cors({
    origin : process.env.FRONTEND_URL,
    credentials : true
}))
app.use(express.json())
app.use(cookiesParser())

app.get('/',(req,res)=>{
    res.json({
        message : "Server connected"
    })
})

app.use('/v1', router)

mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log(`⚡️[Database]: Connected to MongoDB Database....`)
        server.listen(port, ()=>{
            console.log(`YourSay Admin Panel Backend running at http://localhost:${port}`);
        })
    }).catch((error)=>{
        console.log("Error connecting to db!",error);
    })

    const port = process.env.PORT || 8000;


    