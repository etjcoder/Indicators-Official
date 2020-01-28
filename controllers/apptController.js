const db = require("../models");
var moment = require("moment");

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
            .sort({date: 1})
            .then(dbAppt => res.json(dbAppt))
            .catch(err => res.status(422).json(err))
    },
    findWeeklyApptsById: function(req, res) {
        console.log("Finding weekly appointments...")
        db.Appointments
            .find({
                protege: req.params.id,
                created_at: {$gt: moment().subtract(6, 'd').toISOString(), $lte: moment().toISOString()}
            })
            .then(dbDial => res.json(dbDial))
            .catch(err => res.status(422).json(err))
    },
    findMonthlyApptsById: function(req, res) {
        console.log("Finding monthly appointments...")
        db.Appointments
            .find({
                protege: req.params.id,
                created_at: {$gt: moment().subtract(30, 'd').toISOString(), $lte: moment().toISOString()}
            })
            .then(dbAppt => res.json(dbAppt))
            .catch(err => res.status(422).json(err))
    },
    findUserAppts: function(req, res) {
        console.log("Finding appointments...")
        db.Appointments
            .find({protege: req.params.id})
            .sort({date: -1})
            .then(dbAppt => res.json(dbAppt))
            .catch(err => res.json(422).json(err))
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