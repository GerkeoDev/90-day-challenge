const mongoose = require('mongoose')
const { User } = require('./user.model')

const ExpenseSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'The user needs an user id']
    },
    amount: {
        type: Number,
        required: [true, 'The expense needs an amount']
    },
    description: {
        type: String,
        required: [true, 'The expense needs a description']
    },
    category: {
        type: String,
        required: [true, 'The expense needs a category']
    }
}, {timestamps: true})

module.exports.Expense = mongoose.model('Expense', ExpenseSchema)