const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const User = require('./Models/User');


require(('./Config/Connect'))
// Create express App
const app = express();
const port = 4000;
// Common Configurations
app.use(cors())
app.use(morgan('dev'));
app.use(bodyParser.json())
app.use(express.json())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: false }));



// Home Route
app.get('/', async (req, res) => {
    res.json({ message: 'Welcome to my REST API.' });
});

app.post('/enroll', async (req, res) => {
    const data = await User.create(req.body)

    console.log('data has been received in back end')
    res.status(401).send(data)

})
app.get('/enroll', async (req, res) => {
    const data = await User.find()
    res.status(200).send(data)
})
// End route section

app.listen(process.env.port || port, function () {
    console.log(`Backend server start on port ${port}`);
});