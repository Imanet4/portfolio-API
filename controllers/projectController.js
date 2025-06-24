const express = require('express');

const Project = require('../models/project');
const router = express.Router();

//Defining and using routes directly

router.get('/', async (req, res) => {
    try {
        const getProject = await Project.find();
        res.status(200).json(getProject)
    } catch (error) {
        console.log('ERROR')        
    }
});

router.post('/', async (req, res) => {
    try {
        const newProject = await Project.create(req.body);
        res.status(201).json(newProject);
    } catch (error) {
        console.log('Project Has Not Been Added')
    }
});

router.get('/:id', async(req, res) => {
    try {
        const findProject = await Project.findById(req.params.id);
        if (!findProject){
            console.log('Project Not Found')
        }
        res.json(findProject)
    } catch (error) {
        console.log(error)
    }
});

router.put('/:id', async(req, res) => {
    try {
        const {title, description, technologies, githubLink} = req.body;
        const editedProject = await Project.findByIdAndUpdate(req.params.id, req.body, {new:true});
        res.json(editedProject)
    } catch (error) {
        console.log('Something Went Wrong While Editing Your Project');
    }
});

router.delete('/:id', async(req, res) => {
    try {
        const deletedProject = await Project.findByIdAndDelete(req.params.id);
        res.status(200).json({message: 'Project Has been Successfully Deleted!'});
    } catch (error) {
        console.log('Something Went Wrong While Deleting This Project!');
    }
});

module.exports = router;





