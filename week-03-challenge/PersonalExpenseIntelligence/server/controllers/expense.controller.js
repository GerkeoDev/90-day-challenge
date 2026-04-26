const {Expense} = require('../models/expense.model')

const createExpense = (req, res) => {
    const { userId, amount, description, category } = req.body
    Expense.create({
        userId,
        amount,
        description,
        category
    })
        .then(newExpense => res.json(newExpense))
        .catch(err => res.status(400).json(err))
}

const getAllExpenses = (req, res) => {
    Expense.find({})
        .then(allExpenses => res.json(allExpenses))
        .catch(err => res.status(400).json(err))
}

const getOneExpense = (req, res) => {
    const { id } = req.params
    Expense.findOne({ _id: id })
        .then(oneExpense => res.json(oneExpense))
        .catch(err => res.status(500).json(err))
}

const updateExpense = (req, res) => {
    const { id } = req.params
    Expense.findOneAndUpdate({_id: id}, req.body, {  returnDocument: 'after', runValidators: true })
        .then(updatedExpense => res.json(updatedExpense))
        .catch(err => res.status(400).json(err))
}

const deleteExpense = (req, res) => {
    const { id } = req.params
    Expense.deleteOne({_id: id})
        .then(deletedExpense => res.json(deletedExpense))
        .catch(err => res.status(400).json(err))
}

module.exports = {
    createExpense,
    getAllExpenses,
    getOneExpense,
    updateExpense,
    deleteExpense
}