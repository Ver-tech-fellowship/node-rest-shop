const express = require('express');
const router = express.Router(); // The router will register the routes of the application

// We will implement a get and post route for products

// We dont put /products because we are already in the products route becauses we are in the products file so its like the products route is already behind the slash, we can see this in the app.js file
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /products'
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling POST requests to /products'
    });
});

router.get('/:productId', (req, res, next) => {
    // Here we can write any js code and do things like conditional respones given an id or something like that.
    const id = req.params.productId;
    res.status(200).json({
        message: 'Handling POST requests to /products/:productId ' + 'with id: ' + id,
        id: id
    });
});
router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Product ' + req.params.productId + ' deleted'
    });
});

module.exports = router; // We export the router so we can use it in the app.js file