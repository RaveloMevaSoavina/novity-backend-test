const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const LocalStorage = require("node-localstorage").LocalStorage;
const config = require("../config/auth.config");

localStorage = new LocalStorage("./scratch");

exports.signin = (request, response) => {
    let token;
    request.body.username && User.findOne({username: request.body.username})
    .exec((error, user) => {
        if(error){
            response.status(500).send(error)
        }else {
            if (!user){
                    response.status(200).send({message: "Utilisateur invalide",status: "KO"})
            }else{
                if(bcrypt.compareSync(bcrypt.hashSync(request.body.password,8),user.password)){
                    response.status(200).send({message: "Invalid password"})
                }else{
                    token = jwt.sign({ id: user.id }, config.secret, {expiresIn: 86400});
                    let userAuthentify = {username : user.username,token}
                    localStorage.setItem("user", JSON.stringify(userAuthentify));
                    response.status(200).send({message: "Utilisateur succesfully authentified",user : user.username,token});
                }
            }
        }
    });
};