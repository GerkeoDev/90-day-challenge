const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/personal_expense_intelligence_db')
    .then(() => console.log('Connected to the Personal Expense Intelligence Database'))
    .catch(err => console.log('Error connecting to the Personal Expense Intelligence Database:', err));
