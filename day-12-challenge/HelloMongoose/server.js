const express = require('express');
const app = express();
const port = 8000;

require('./server/config/mongoose.config');

app.use(express.json(), express.urlencoded({ extended: true }));

const AllMyUserRoutes = require('./server/routes/user.routes');
AllMyUserRoutes(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));