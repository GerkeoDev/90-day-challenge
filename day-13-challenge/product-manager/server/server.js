const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;

require('./config/mongoose.config');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./routes/manager.routes')(app);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));