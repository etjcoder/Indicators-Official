const db = require("../models");

module.exports = {

    findDials: function(req, res) {
        console.log("Finding Dials...")
        db.Dial
            .find()
            .then(dbDial => res.json(dbDial))
            .catch(err => res.status(422).json(err))
    },
    createDial: function(req, res) {
        console.log("Creating Dials...")
        db.Dial
            .create(req.body)
            .then(function(dbDial){ 
                res.json(dbDial)
                return db.Protege.findByIdAndUpdate({ _id: req.params.id }, { $push: { dials: dbDial._id } }, {new: true})
            })
            .catch(err => res.status(422).json(err))
    },
    createAppointment: function(req, res) {
        console.log("Creating Appt...")
        db.Appointments
            .create(req.body)
            .then(function(dbAppt) {
                res.json(dbAppt)
                return db.Protege.findByIdAndUpdate({ _id: req.params.id}, { $push: { appointments: dbAppt._id } }, {new: true})
            })
            .catch(err => res.status(422).json(err))
    },
    findContacts: function(req, res) {
        console.log("Collecting contacts...")
        db.Dial
            .find({
                dialer: req.params.id,
                contact: true
            }).then(dbDial => res.json(dbDial))
            .catch(err => res.status(422).json(err))
    },

}