const Habit = require('../models/Habit.model')


//CRUD Controllers
const getAllHabits = (req, res) => {
    Habit.find({ userId: req.user.id })
        .then(allHabits => res.json(allHabits))
        .catch(err => res.status(400).json(err))
}

const getOneHabit = (req, res) => {
    Habit.findOne({ _id: req.params.id, userId: req.user.id })
        .then(oneHabit => {
            if (!oneHabit) {
                return res.status(404).json({ message: 'Habit not found' })
            }
            res.json(oneHabit)
        })
        .catch(err => res.status(500).json(err))
}

const createHabit = (req, res) => {
    const { title, frequency } = req.body
    Habit.create({
        userId: req.user.id,
        title,
        frequency
    })
        .then(newHabit => res.json(newHabit))
        .catch(err => res.status(400).json(err))
}

const updateHabit = (req, res) => {
    const { id } = req.params
    Habit.findOneAndUpdate(
        { _id: id, userId: req.user.id },
        req.body,
        { returnDocument: 'after', runValidators: true }
    )
        .then(updatedHabit => {
            if (!updatedHabit) {
                return res.status(404).json({ message: 'Habit not found' })
            }
            res.json(updatedHabit)
        })
        .catch(err => res.status(400).json(err))
}

const deleteHabit = (req, res) => {
    const { id } = req.params
    Habit.deleteOne({ _id: id, userId: req.user.id })
        .then(result => {
            if (result.deletedCount === 0) {
                return res.status(404).json({ message: 'Habit not found' })
            }
            res.json({ message: 'Habit deleted' })
        })
        .catch(err => res.status(400).json(err))
}

//Custom Controllers


module.exports = {
    getAllHabits,
    getOneHabit,
    createHabit,
    updateHabit,
    deleteHabit
}