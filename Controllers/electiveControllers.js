const {default: mongoose} = require('mongoose')
const Elective = require('../Models/electiveSchema')

// Get elective details

const getElective = async (req,res) => {
    const elective = await Elective.find({}).sort({createdAt: -1})

    res.status(200).json(elective)
}

// Get single elective detail

const getsingleElective = async (req,res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Invalid mongoose id'})
    }

    const elective = await Elective.findById(id)

    if(!elective) {
        return res.status(404).json({error: 'No such elective details available'})
    }

    res.status(200).json(elective)
}

// Add an elective detail

const addElective = async (req,res) =>   {
    const {Name, IIT, CourseWeek} = req.body

    try{
        const elective = await Elective.create({Name, IIT, CourseWeek})
        res.status(200).json(elective)
    }
    catch(error) {
        return res.status(404).json({error: 'Not able to add elective'})
    }
}

// Update an elective detail
const updateElective = async (req,res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Invalid mongoose id'})
    }

    const elective = await Elective.findOneAndUpdate({_id: id})

    if(!elective) {
        return res.status(404).json({error: 'No such elective details available'})
    }

    res.status(200).json(elective)
}
// Delete an elective
const deleteElective = async (req,res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Invalid mongoose id'})
    }

    const elective = await Elective.findOneAndDelete({_id: id})

    if(!elective) {
        return res.status(404).json({error: 'No such elective details available'})
    }

    res.status(200).json(elective)
}

module.exports = {
    getElective,
    getsingleElective,
    addElective,
    updateElective,
    deleteElective
}
