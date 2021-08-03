const Client = require("../models/client.model");

exports.retrieve = (req, res) => {
  Client.find().sort({ creation: "descending" }).exec((error, client) => {
      error ? res.status(500).send(error) 
      : res.json({status: 200,message: "Liste of all clients in DB", clients : client});
  });
};