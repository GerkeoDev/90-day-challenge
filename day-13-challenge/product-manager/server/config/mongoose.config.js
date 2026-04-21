const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/product_manager_db')
    .then(() => console.log('Connected to the database'))
    .catch(err => console.log('Error connecting to the database', err));