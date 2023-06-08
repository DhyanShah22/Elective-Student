const mongoose = require('mongoose')

const Schema = mongoose.Schema

const electiveSchema = new Schema ({
    Name: {
        type: String,
        required: true
    },
    IIT: {
        type: String,
        required: true
    },
    CourseWeek: {
        type: Number,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Elect', electiveSchema)