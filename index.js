const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const User = require('./Models/User');
const Client = require('./Models/Client');


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
app.post('/register', async (req, res) => {
    try {

        const data = await Client.create(req.body)
        console.log('data has been received in back end')
        res.status(200).send(data)

    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }


})
app.get('/enroll', async (req, res) => {
    const data = await User.find()
    res.status(200).send(data)
})
const AutRoutes = require('./Routes/UserRoutes')
app.use('/api', AutRoutes)
// End route section

app.listen(process.env.port || port, function () {
    console.log(`Backend server start on port ${port} `);
});