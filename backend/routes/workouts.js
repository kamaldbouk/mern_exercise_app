const express = require('express');
const Workout = require('../models/workoutModel')
const router = express.Router();

// get all workouts
router.get('/', (req, res) => {
    res.json({msg: "get all workouts"})
}) 

// get single workout
router.get('/:id', (req, res) => {
    res.json({msg: "get single workout"})
}) 

// post new workout
router.post('/', async (req,res) => {

    const {title, load, reps} = req.body
    try {
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout);
    }
    catch (error) {
        res.status(400).json({error: error.msg});
    }
})

// delete a workout
router.delete('/:id', (req,res) => {
    res.json({msg: "delete workout"})
})

// update a workout
router.patch('/:id', (req,res) => {
    res.json({msg: "update a workout"})
})

module.exports = router;