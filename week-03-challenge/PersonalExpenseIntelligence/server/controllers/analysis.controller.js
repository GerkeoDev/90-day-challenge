const {Expense} = require('../models/expense.model')

const getGeneralAnalysis = async (req, res) => {
    
    
    const expenses = await Expense.find({ userId: req.user.id})

    const totalSpent = expenses.reduce((acc, e) => acc + e.amount, 0)

    const biggestExpense = expenses.reduce((max, e) => 
        e.amount > max.amount ? e : max, expenses[0] || {amount: 0}
    )

    const categories = {}

    expenses.forEach(e => {
        categories[e.category] = (categories[e.category] || 0) + e.amount
    })

    const mainCategory = Object.keys(categories).reduce((max, c) => 
        categories[c] > categories[max] ? c : max, Object.keys(categories)[0]
    )
    
    res.json({
        totalSpent,
        biggestExpense,
        categories,
        mainCategory,
        warning: totalSpent > 1000
    })
}

module.exports = {
    getGeneralAnalysis
}