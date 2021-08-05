const Consultant = require("../models/consultant.model");

exports.retrieve = (request, response) => {
    Consultant.find().sort({ creation: "descending" }).exec((error, consultant) => {
      error ? response.status(500).send(error) 
      : response.json({status: 200,message: "All consultant resources in DB", consultants : consultant});
  });
};

exports.retrieveOne = (request, response) => {
    Consultant.findOne({ _id: request.params.id }, (error, consultant) => {
    error ? response.status(500).send(error)
    : response.json({ status: 200 , message: "Consultant details", consultants : consultant });
  });
};

exports.create = (request , response) => {
  let consultant = new Consultant();
  consultant = Object.assign(consultant, request.body);

  consultant.save()
  .then((consultant) => response.json({status: 201 , message: "Resource registered successfully", consultants: consultant}))
  .catch((error) => response.status(500).send(error));
}

exports.delete = (request, response) => {
    Consultant.findByIdAndRemove({ _id: request.params.id }, (error, consultant) => {
    error ? response.status(500).json(err)
    : response.json({status: 204, message: "Resource deleted successfully", consultants : consultant})
  })
};

exports.update = (request, response) => {
  Consultant.findOneAndUpdate({ _id: request.params.id },{ $set: request.body},{ new: true }, (error, consultant) => {
  error ? response.status(500).send(error)
  : response.json({status: 204, message: "Resource updated successfully", consultants : consultant});
  });
};
