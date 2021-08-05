const mongoose = require("mongoose")

const Clients = new mongoose.Schema({
    nom_client: {type: String, required: true},
    type:{type: String},
    stack_technique: {type: String},     
    localisation: {type: String},     
    structure_equipe: {type: String},
    contact: {type: String}, 
}, { collection: 'client_novity'})


module.exports = mongoose.model('client_novity', Clients)