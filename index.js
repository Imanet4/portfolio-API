const express = require('express');
const mongoose = require('mongoose');
const User = require('./controllers/userController');
const Project = require('./controllers/projectController');
const Skill = require('./controllers/skillsController');
const Contact = require('./controllers/contactController');

const app = express ();
const PORT = 4000;

// For the middleware

app.use(express.json());

//Connecting to MongoDB

mongoose.connect('mongodb://localhost:27017/Portfolio-API')
.then(() => console.log('Connected To MongoDB'))
.catch(err => console.error('MongoDB error', err));


app.use('/User', User );
app.use('/Project', Project);
app.use('/Skill', Skill);
app.use('/Contact', Contact);




//Testing our route if it's working

app.get('/', (req, res) => {
    res.send('API IS RUNNING SUCCESSFULLY !')
});


//To start our server

app.listen(PORT, () => {
    console.log(`Server is running on : http://localhost:${PORT}`);
});