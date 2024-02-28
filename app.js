// We import dependncies with requiere
const express = require('express');
const app = express();

const productRoutes = require('./api/routes/products');
app.use('/products', productRoutes); // This is the middleware that will handle the requests that go to /products

const ordersRoutes = require('./api/routes/orders');
app.use('/orders', ordersRoutes); // This is the middleware that will handle the requests that go to /products

app.use('/', (req, res, next) => {
    res.status(200).json({
        message: 'It works!'
    })}
);

// The order of the middleware is important, the middleware that is on top will be executed first even if we have a specified route  for the specific url, that is why we have tu put the most specific routes first at the top


module.exports = app;