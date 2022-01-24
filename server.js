const express = require('express');
const app = express()
const routes = require('./app/routes/index');
const bodyParser = require('body-parser');


// gunakan body parser sebgai middleware
app.use(bodyParser.json());


app.use('/makanan', routes);

app.listen('3000', () => {
    console.log('Listen to Port http://localhost:3000')
})