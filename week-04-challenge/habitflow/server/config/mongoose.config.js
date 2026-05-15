const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/habitflow_db')
    .then(() => console.log('Connected to the database\n----------------------------------------------------------------'))
    .catch(err => console.log('Error connecting to the database', err))