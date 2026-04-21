const ManagerController = require('../controllers/manager.controller');
module.exports = function(app) {
    app.get('/api/products/hello', ManagerController.helloWorld);
    app.post('/api/products', ManagerController.createProduct);
    app.get('/api/products', ManagerController.findAllProducts);
    app.get('/api/products/:id', ManagerController.findOneProduct);
    app.put('/api/products/:id', ManagerController.updateProduct);
    app.delete('/api/products/:id', ManagerController.deleteProduct);
}