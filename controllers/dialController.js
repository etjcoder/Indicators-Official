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
    createSale: function(req, res) {
        console.log("Creating Sale...")
        db.Sale
            .create(req.body)
            .then(function(dbSale) {
                res.json(dbSale)
            })
            .catch(err => res.status(422).json(err))
    },
    createMentorSale: function(req, res) {
        db.Sale
            .create(req.body)
            .then(function(dbSale) {
                res.json(dbSale)
            })
            .catch(err => res.status(422).json(err))
    },
    getProtegeSalesById: function(req, res) {
        console.log("Getting Sales...")
        db.Sale
            .find({
                    protege: req.params.id
                })
            .then(dbSale => res.json(dbSale))
            .catch(err => res.status(422).json(err))
    },
    findMentorSalesById: function(req, res) {
        console.log("Getting Sales...")
        db.Sale
            .find({ 
                mentor: req.params.id
            })
            .then(dbSale => res.json(dbSale))
            .catch(err => res.status(422).json(err))
    },
    updateSale: function(req, res) {
        console.log("Updating Sales")
        db.Sale
            .findOneAndUpdate({ _id: req.params.id}, req.body)
            .then(dbAppt => res.json(dbAppt))
            .catch(err => res.status(422).json(err))
    },
    deleteSale: function(req, res) {
        console.log("Deleting Sales")
        db.Sale
            .findById({ _id: req.params.id})
            .then(dbSale => dbSale.remove())
            .then(dbSale => res.json(dbSale))
            .catch(err => res.status(422).json(err))
    }
}