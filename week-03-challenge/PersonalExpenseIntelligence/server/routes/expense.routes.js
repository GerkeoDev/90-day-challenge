const express = require('express')
const ExpenseController = require('../controllers/expense.controller')
const router = express.Router()

router.post('/expenses', ExpenseController.createExpense)
router.get('/expenses', ExpenseController.getAllExpenses)
router.get('/expenses/:id', ExpenseController.getOneExpense)
router.put('/expenses/:id', ExpenseController.updateExpense)
router.delete('/expenses/:id', ExpenseController.deleteExpense)

module.exports = {
    expenseRouter: router
}