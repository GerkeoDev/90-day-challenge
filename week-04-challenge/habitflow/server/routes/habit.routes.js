const express = require('express')
const HabitController = require('../controllers/habit.controller')
const router = express.Router()
const { verifyToken } = require('../middleware/oauth.middleware')

router.get('/habits', verifyToken, HabitController.getAllHabits)
router.get('/habits/:id', verifyToken, HabitController.getOneHabit)
router.post('/habits', verifyToken, HabitController.createHabit)
router.put('/habits/:id', verifyToken, HabitController.updateHabit)
router.delete('/habits/:id', verifyToken, HabitController.deleteHabit)
router.put('/habits/:id/check', verifyToken, HabitController.checkHabit)

module.exports = {
    habitRouter: router
}