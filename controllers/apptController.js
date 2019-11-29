const db = require("../models");

module.exports = {
     createAppt: function(req, res) {
        console.log("Creating Appointment...")
        db.Appointments
            .create(req.body)
            .then(dbAppt => res.json(dbAppt))
            .catch(err => res.status(422).json(err))
    },
    findAppts: function(req, res) {
        console.log("Finding Appointments...")
        db.Appointments
            .find()
            .then(dbAppt => res.json(dbAppt))
            .catch(err => res.status(422).json(err))
    },
    updateAppt: function(req, res) {
        db.Appointments
            .findOneAndUpdate({ _id: req.params.id}, req.body)
            .then(dbAppt => res.json(dbAppt))
            .catch(err => res.status(422).json(err))
    },
    deleteAppt: function(req, res) {
        db.Appointments
            .findById({ _id: req.params.id})
            .then(dbAppt => dbAppt.remove())
            .then(dbAppt => res.json(dbAppt))
            .catch(err => res.status(422).json(err));
    }
}