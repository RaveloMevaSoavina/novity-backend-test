const mongoose = require("mongoose")

const Consultant = new mongoose.Schema({ 
    consultant : {type: String, required: true},
    date_entree : {type: Date},
    annee_de_naissance : {type: Date},
    situation_familiale : {type: String},
    localisation : {type: String},
    contact1 : {type: String},
    contact2 : {type: String},
    diplomes : {type: String},
    qualification : {type: String},
    techno1 : {type: String},
    techno2 : {type: String},
    nouvelles_competences : {type: String},
    notes : {type: String},
    client_attribue : {type: String, required: true},
    type_de_missions : {type: String, required: true},
    debut_mission : {type: Date},
    fin_mission: {type: Date},
}, { collection: 'consultant_novity'})


module.exports = mongoose.model('consultant_novity', Consultant)