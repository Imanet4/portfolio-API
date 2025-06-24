const express = require('express');

const Skill = require('../models/skills');
const router = express.Router();

//Defining and using routes directly

router.get('/', async (req, res) => {
    try {
        const getSkill = await Skill.find();
        res.status(200).json(getSkill)
    } catch (error) {
        console.log('ERROR')        
    }
});

router.post('/', async (req, res) => {
    try {
        const newSkill = await Skill.create(req.body);
        res.status(201).json(newSkill);
    } catch (error) {
        console.log('Skill Has Not Been Added')
    }
});

router.get('/:id', async(req, res) => {
    try {
        const findSkill = await Skill.findById(req.params.id);
        if (!findSkill){
            console.log('Skill Not Found')
        }
        res.json(findSkill)
    } catch (error) {
        console.log(error)
    }
});

router.put('/:id', async(req, res) => {
    try {
        const {name, level} = req.body;
        const editedSkill = await Skill.findByIdAndUpdate(req.params.id, req.body, {new:true});
        res.json(editedSkill)
    } catch (error) {
        console.log('Something Went Wrong While Editing Your Skill');
    }
});

router.delete('/:id', async(req, res) => {
    try {
        const deletedSkill = await Skill.findByIdAndDelete(req.params.id);
        res.status(200).json({message: 'Skill Has been Successfully Deleted!'});
    } catch (error) {
        console.log('Something Went Wrong While Deleting This Skill!');
    }
});

module.exports = router;





