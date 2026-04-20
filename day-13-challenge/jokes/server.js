const express = require('express');
const app = express();
const PORT = 8000;

require('./server/config/mongoose.config');

app.use(express.json(), express.urlencoded({ extended: true }));

const AllMyUserRoutes = require('./server/routes/jokes.routes');
AllMyUserRoutes(app);

app.listen(PORT, () => console.log(`The server is all fired up on port ${PORT}`));