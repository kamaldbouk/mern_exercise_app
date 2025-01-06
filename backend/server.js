require('dotenv').config()

const express = require('express')
const app = express()
const workoutRoutes = require('./routes/workouts')
const mongoose = require('mongoose')

//middleware to log the / GET or / POST ...
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

//middleware that logs data that is sent to server 
// (basically allows me to access the req body)
app.use(express.json());

// you can add the routes themselves here 
// or make them in seperate folders for terteeb
app.use('/api/workouts', workoutRoutes); 

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("Connected to DB & Listening on port", process.env.PORT)
        });
    })
    .catch((error) => {
        console.log(error)
    })

