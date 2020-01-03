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
    findProteges: function (req, res) {
        db.Protege
            .find()
            .populate("dials")
            .then(dbProtege => res.json(dbProtege))
            .catch(err => res.status(422).json(err))
    },
    createMentor: function (req, res) {
        db.Mentor
            .create(req.body)
            .then(dbMentor => res.json(dbMentor))
            .catch(err => res.status(422).json(err))
    },
    findAllMentors: function (req, res) {
        db.Mentor
            .find(req.body)
            .then(dbMentor => res.json(dbMentor))
            .catch(err => res.status(422).json(err))
    },
    findProtege: function (req, res) {
        db.Protege
            .find({ uid: req.params.id })
            .then(dbProtege => res.json(dbProtege))
            .catch(err => res.status(422).json(err))
    },
    findProtegeById: function (req, res) {
        db.Protege
            .find({ _id: req.params.id })
            .populate("dials")
            .populate("notes")
            .populate("appointments")
            .populate("allMentors")
            .then(dbProtege => res.json(dbProtege))
            .catch(err => res.status(422).json(err))
    },
    findMentorById: function (req, res) {
        db.Mentor
            .find({ _id: req.params.id })
            .populate("proteges")
            .then(dbMentor => res.json(dbMentor))
            .catch(err => res.status(422).json(err))
    },
    findMentor: function (req, res) {
        db.Mentor
            .find({ uid: req.params.id })
            .populate("proteges")
            .populate("notes")
            .then(dbMentor => res.json(dbMentor))
            .catch(err => res.status(422).json(err))
    },
    pushProtegeToMentor: function (req, res) {
        db.Mentor
            .findByIdAndUpdate({ _id: req.params.id }, { $push: { proteges: req.body.id } })
            .then(dbMentor => res.json(dbMentor))
            .catch(err => res.status(422).json(err))
    },
    pullProtegeFromArray: function (req, res) {
        console.log(req.body.id)
        db.Mentor
            .findByIdAndUpdate({ _id: req.params.id }, { $pull: { proteges: { $in: req.body.id } } }, { useFindAndModify: false})
            .then(dbMentor => res.json(dbMentor))
            .catch(err => res.status(422).json(err))
    },
    pullMentorFromArray: function (req, res) {
        console.log(req.body.id)
        db.Protege
            .findByIdAndUpdate({ _id: req.params.id}, { $pull: { allMentors: { $in: req.body.id } } })
            .then(dbProtege => res.json(dbProtege))
            .catch(err => res.status(422).json(err))
    },
    pushMentorToProtege: function (req, res) {
        console.log(req.body.id)
        db.Protege
            .findByIdAndUpdate({ _id: req.params.id}, { $push: { allMentors: req.body.id} })
            .then(dbProtege => res.json(dbProtege))
            .catch(err => res.status(422).json(err))
    },
    findMentorNotes: function (req, res) {
        db.Note
            .find({ noteTagged: req.params.id })
            .then(dbNote => res.json(dbNote))
            .catch(err => res.status(422).json(err))
    },
    createMentorNote: function(req, res) {
        db.Note
            .create(req.body)
            .then(function(dbNote) {
                res.json(dbNote)
                return (
                    db.Mentor.findByIdAndUpdate({ _id: req.params.id}, { $push: { notes: dbNote._id} }, {new: true})
                )
            })
            .catch(err => res.status(422).json(err))
    }
}