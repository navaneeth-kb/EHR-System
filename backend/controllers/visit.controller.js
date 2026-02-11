const Visit = require("../models/Visit");

exports.addVisit = async (req, res, next) => {
  try {
    const visit = await Visit.create({
      ...req.body,
      patientId: req.params.patientId
    });
    res.status(201).json(visit);
  } catch (err) {
    next(err);
  }
};

exports.getVisits = async (req, res, next) => {
  try {
    const visits = await Visit.find({
      patientId: req.params.patientId
    }).sort({ visitDate: -1 });

    res.json(visits);
  } catch (err) {
    next(err);
  }
};

exports.deleteVisit = async (req, res, next) => {
  try {
    await Visit.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    next(err);
  }
};
