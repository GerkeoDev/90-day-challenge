const UserController = require('../controllers/user.controller');

module.exports = app => {
    app.get('/api/users', UserController.findAllUsers);
    app.get('/api/user/:id', UserController.findOneSingleUser);
    app.post('/api/user/new', UserController.createNewUser);
    app.put('/api/user/update/:id', UserController.updateExistingUser);
    app.delete('/api/user/delete/:id', UserController.deleteAnExistingUser);
}