const express = require('express');

const User = require('../models/user');
const router = express.Router();


//Defining and using routes directly

router.get('/', async (req, res) => {
    try {
        const getUser = await User.find();
        res.status(200).json(getUser)
    } catch (error) {
        console.log('ERROR')        
    }
});

router.post('/', async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        console.log('User Has Not Been Added')
    }
});

router.get('/:id', async(req, res) => {
    try {
        const findUser = await User.findById(req.params.id);
        if (!findUser){
            console.log('User Not Found')
        }
        res.json(findUser)
    } catch (error) {
        console.log(error)
    }
});

router.put('/:id', async(req, res) => {
    try {
        const {name, about, status, phone, email, github, linkedin} = req.body;
        const editedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new:true});
        res.json(editedUser)
    } catch (error) {
        console.log('Something Went Wrong While Editing');
    }
});

router.delete('/:id', async(req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        res.status(200).json({message: 'User Has been Successfully Deleted!'});
    } catch (error) {
        console.log('Something Went Wrong While Deleting This User!');
    }
});

module.exports = router;





