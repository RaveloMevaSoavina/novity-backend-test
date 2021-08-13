const Moodclient = require("../models/moodclient.model");
const Client = require("../models/client.model");

exports.retrieve = (request, response) => {
    Moodclient.find().sort({ creation: "descending" }).exec((error, mood) => {
      error ? response.status(500).send(error) 
      : response.json({status: 200,message: "All clients moods resources in DB", moods : mood});
  });
};

exports.retrieveOne = (request, response) => {
    Moodclient.findOne({ _id: request.params.id }, (error, mood) => {
    error ? response.status(500).send(error)
    : response.json({ status: 200 , message: "Client moods details", moods : mood });
  });
};

exports.create = (request , response) => {
  let client = new Moodclient();
  client = Object.assign(client, request.body);

  client.save()
  .then((mood) => response.json({status: 201 , message: "Resource registered successfully", moods: mood}))
  .catch((error) => response.status(500).send(error));
}

exports.delete = (request, response) => {
    Moodclient.findByIdAndRemove({ _id: request.params.id }, (error, mood) => {
    error ? response.status(500).json(err)
    : response.json({status: 204, message: "Resource deleted successfully", moods : mood})
  })
};

exports.update = (request, response) => {
    Moodclient.findOneAndUpdate({ _id: request.params.id },{ $set: request.body},{ new: true }, (error, mood) => {
  error ? response.status(500).send(error)
  : response.json({status: 204, message: "Resource updated successfully", moods :mood});
  });
};
