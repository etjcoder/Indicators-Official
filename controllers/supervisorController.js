const db = require("../models");

module.exports = {
    createProtege: function (req, res) {
        db.Protege
            .create(req.body)
            .then(dbProtege => res.json(dbProtege))
            .catch(err => res.status(422).json(err))
    },
    findUser: function (req, res) {
        db.Protege
            .find({ uid: req.params.id })
            .populate("dials")
            .populate("notes")
            .then(dbProtege => res.json(dbProtege))
            .catch(err => res.status(422).json(err))
    },
    findProteges: function(req, res) {
        db.Protege
            .find()
            .populate("dials")
            .then(dbProtege => res.json(dbProtege))
            .catch(err => res.status(422).json(err))
    },
    createMentor: function(req, res) {
        db.Mentor
            .create(req.body)
            .then(dbMentor => res.json(dbMentor))
            .catch(err => res.status(422).json(err))
    },
    findAllMentors: function(req, res) {
        db.Mentor
            .find(req.body)
            .then(dbMentor => res.json(dbMentor))
            .catch(err => res.status(422).json(err))
    },
    findProtege: function(req, res) {
        db.Protege
            .find({ uid: req.params.id})
            .then(dbProtege => res.json(dbProtege))
            .catch(err => res.status(422).json(err))
    },
    findProtegeById: function(req, res) {
        db.Protege
            .find({ _id: req.params.id})
            .populate("dials")
            .populate("notes")
            .then(dbProtege => res.json(dbProtege))
            .catch(err => res.status(422).json(err))
    },
    findMentorById: function(req, res) {
        db.Mentor
            .find({ _id: req.params.id})
            .populate("proteges")
            .then(dbMentor => res.json(dbMentor))
            .catch(err => res.status(422).json(err))
    },
    findMentor: function(req, res) {
        db.Mentor
            .find({ uid: req.params.id})
            .populate("proteges")
            .populate("notes")
            .then(dbMentor => res.json(dbMentor))
            .catch(err => res.status(422).json(err))
    },
    pushProtegeToMentor: function(req, res) {
        db.Mentor
            .findByIdAndUpdate({ _id: req.params.id}, { $push: { proteges: req.body.id}})
            .then(dbMentor => res.json(dbMentor))
            .catch(err => res.status(422).json(err))
    },
    pullProtegeFromArray: function(req, res) {
        db.Mentor
            .update({ _id: req.params.id}, { $pull: { proteges: {$in: req.body.id}}})
            .then(dbMentor => res.json(dbMentor))
            .catch(err => res.status(422).json(err))
    }
}