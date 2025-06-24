const express = require('express');

const Contact = require('../models/contact');
const router = express.Router();

//Defining and using routes directly

router.get('/', async (req, res) => {
    try {
        const getContact = await Contact.find();
        res.status(200).json(getContact)
    } catch (error) {
        console.log('ERROR')        
    }
});

router.post('/', async (req, res) => {
    try {
        const newContact = await Contact.create(req.body);
        res.status(201).json(newContact);
    } catch (error) {
        console.log('Contact Has Not Been Added')
    }
});

router.get('/:id', async(req, res) => {
    try {
        const findContact = await Contact.findById(req.params.id);
        if (!findContact){
            console.log('Contact Not Found')
        }
        res.json(findContact)
    } catch (error) {
        console.log(error)
    }
});

router.put('/:id', async(req, res) => {
    try {
        const {name, email, message} = req.body;
        const editedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, {new:true});
        res.json(editedContact)
    } catch (error) {
        console.log('Something Went Wrong While Editing Your Contact');
    }
});

router.delete('/:id', async(req, res) => {
    try {
        const deletedContact = await Contact.findByIdAndDelete(req.params.id);
        res.status(200).json({message: 'Contact Has been Successfully Deleted!'});
    } catch (error) {
        console.log('Something Went Wrong While Deleting This Contact!');
    }
});

module.exports = router;





