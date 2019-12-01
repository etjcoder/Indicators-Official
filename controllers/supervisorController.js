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
    }
}