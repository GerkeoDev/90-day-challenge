const {Expense} = require('../models/expense.model')


const createExpense = (req, res) => {
    const { amount, description, category } = req.body
    Expense.create({
        userId: req.user.id,
        amount,
        description,
        category
    })
        .then(newExpense => {
            res.json(newExpense)
        })
        .catch(err => res.status(400).json(err))
}

const getAllExpenses = (req, res) => {
    Expense.find({ userId: req.user.id })
        .then(allExpenses => res.json(allExpenses))
        .catch(err => res.status(400).json(err))
}

const getOneExpense = (req, res) => {
    const { id } = req.params
    Expense.findOne({ _id: id, userId: req.user.id })
        .then(oneExpense => {
            if (!oneExpense) {
                return res.status(404).json({ message: 'Expense not found' })
            }
            res.json(oneExpense)
        })
        .catch(err => res.status(500).json(err))
}

const updateExpense = (req, res) => {
    const { id } = req.params
    Expense.findOneAndUpdate(
        {_id: id, userId: req.user.id},
        req.body,
        {  returnDocument: 'after', runValidators: true }
    )
        .then(updatedExpense => {
            if (!updatedExpense) {
                return res.status(404).json({ message: 'Expense not found or not yours' })
            }            
            res.json(updatedExpense)

        })
        .catch(err => res.status(400).json(err))
}

const deleteExpense = (req, res) => {
    const { id } = req.params

    Expense.deleteOne({_id: id, userId: req.user.id })
        .then(result => {
            if (result.deletedCount === 0){
                return res.status(404).json({ message: 'Expense not found or not yours' })
            }
            res.json({ message: 'Expense deleted' })
        })
        .catch(err => res.status(400).json(err))
}

module.exports = {
    createExpense,
    getAllExpenses,
    getOneExpense,
    updateExpense,
    deleteExpense
}