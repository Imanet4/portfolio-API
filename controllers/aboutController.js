const express = require('express');
const About = require('../models/about');
const router = express.Router();


router.get('/about', async (req, res) => {
    try {
        const getAbout = await About.findOne();
        res.status(200).json(getAbout);
    } catch (error) {
        console.log('Error fetching about section:', error);
        
    }
});

router.post('/add', async (req, res) => {
    try {
        const newAbout = await About.create(req.body);
        res.status(201).json(newAbout);
    } catch (error) {
        console.log('Error creating about section:', error);
        
    }
});

router.get('/about/:id', async (req, res) => {
    try {
        const findAbout = await About.findById(req.params.id);
        if (!findAbout) {
            console.log('About section not found');
        }
        res.json(findAbout);
    } catch (error) {
        console.log('Error fetching about section by ID:', error);
    }
});

router.put('/about/:id', async (req, res) => {
    try {
        const { AboutMe, ResumeLink } = req.body;
        const editedAbout = await About.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(editedAbout);
    } catch (error) {
        console.log('Error updating about section:', error);
    }
});

router.delete('/about/:id', async (req, res) => {
    try {
        const deletedAbout = await About.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'About section has been successfully deleted!' });
    } catch (error) {
        console.log('Error deleting about section:', error);
    }
});

module.exports = router;