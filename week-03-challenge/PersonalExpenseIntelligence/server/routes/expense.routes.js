const express = require('express')
const ExpenseController = require('../controllers/expense.controller')
const router = express.Router()
const { verifyToken } = require('../utils/oauth')

router.post('/expenses', verifyToken, ExpenseController.createExpense)
router.get('/expenses', verifyToken, ExpenseController.getAllExpenses)
router.get('/expenses/:id', verifyToken, ExpenseController.getOneExpense)
router.put('/expenses/:id', verifyToken, ExpenseController.updateExpense)
router.delete('/expenses/:id', verifyToken, ExpenseController.deleteExpense)

module.exports = {
    expenseRouter: router
}