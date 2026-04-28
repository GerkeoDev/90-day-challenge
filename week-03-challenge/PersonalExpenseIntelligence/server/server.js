const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const app = express();
const PORT = 8000;
require('dotenv').config();
const { CLIENT_URL } = process.env


require('./config/mongoose.config');

app.use(cors({credentials: true, origin: CLIENT_URL}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

//Routes
const {oAuthRouter} = require('./routes/oauth.routes');
app.use('/api/', oAuthRouter)

const {expenseRouter} = require('./routes/expense.routes');
app.use('/api/', expenseRouter)

const {analysisRouter} = require('./routes/analysis.routes');
app.use('/api/', analysisRouter)


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
