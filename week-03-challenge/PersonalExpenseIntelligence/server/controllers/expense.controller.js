const {Expense} = require('../models/expense.model')

//Add user authentication

const createExpense = (req, res) => {
    console.log(req.body)
    const { amount, description, category } = req.body
    Expense.create({
        userId: req.user.id,
        amount,
        description,
        category
    })
        .then(newExpense => {
            res.json(newExpense)
            console.log('New expense created: ', newExpense)
        })
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