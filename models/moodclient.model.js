const mongoose = require("mongoose")

const Moodclient = new mongoose.Schema({
    nom_client: {type: String, required: true},
    question1:{type: String},
    question2: {type: String},      
    question3: {type: String}     
}, { collection: 'moodclient'})


module.exports = mongoose.model('moodclient', Moodclient)