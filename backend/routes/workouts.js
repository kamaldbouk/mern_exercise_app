const express = require('express');
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
router.post('/', (req,res) => {
    res.json({msg: "post new workout"})
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