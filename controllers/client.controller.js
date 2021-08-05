const Client = require("../models/client.model");

exports.retrieve = (request, response) => {
  Client.find().sort({ creation: "descending" }).exec((error, client) => {
      error ? response.status(500).send(error) 
      : response.json({status: 200,message: "All clients resources in DB", clients : client});
  });
};

exports.retrieveOne = (request, response) => {
  Client.findOne({ _id: request.params.id }, (error, client) => {
    error ? response.status(500).send(error)
    : response.json({ status: 200 , message: "Client details", clients : client });
  });
};

exports.create = (request , response) => {
  let client = new Client();
  client = Object.assign(client, request.body);

  client.save()
  .then((client) => response.json({status: 201 , message: "Resource registered successfully", clients: client}))
  .catch((error) => response.status(500).send(error));
}

exports.delete = (request, response) => {
  Client.findByIdAndRemove({ _id: request.params.id }, (error, client) => {
    error ? response.status(500).json(err)
    : response.json({status: 204, message: "Resource deleted successfully", client})
  })
};

exports.update = (request, response) => {
  Client.findOneAndUpdate({ _id: request.params.id },{ $set: request.body},{ new: true }, (error, client) => {
  error ? response.status(500).send(error)
  : response.json({status: 204, message: "Resource updated successfully", client});
  });
};
