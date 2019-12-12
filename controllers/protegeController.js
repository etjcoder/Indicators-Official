const db = require("../models");

module.exports = {
    addSource: function(req, res) {
        console.log(req.body.source)
        db.Protege
            .findByIdAndUpdate({ _id: req.params.id}, { $push: { sources: req.body.source}})
            .then(dbProtege => res.json(dbProtege))
            .catch(err => res.status(422).json(err))
    },
    addTargetMkt: function(req, res) {
        console.log(req.body.targetMarket)
        db.Protege
            .findByIdAndUpdate({ _id: req.params.id}, { $push: { targetMarkets: req.body.targetMarket}})
            .then(dbProtege => res.json(dbProtege))
            .catch(err => res.status(422).json(err))
    },
    createNote: function(req, res) {
        db.Note
            .create(req.body)
            .then(function(dbNote) {
                res.json(dbNote)
                return (
                    db.Protege.findByIdAndUpdate({ _id: req.params.id}, { $push: { notes: dbNote._id} }, {new: true})
                )
              
            })
            .catch(err => res.status(422).json(err))

    },
    completeNote: function(req, res) {
        db.Note 
            .findByIdAndUpdate({ _id: req.params.id}, {completed: true})
            .then(dbNote => res.json(dbNote))
            .catch(err => res.status(422).json(err))
    },
    uncompleteNote: function(req, res) {
        db.Note
            .findByIdAndUpdate({ _id: req.params.id}, {completed: false})
            .then(dbNote => res.json(dbNote))
            .catch(err => res.status(422).json(err))
    },
    deleteNote: function(req, res) {
        db.Note
            .findById({ _id: req.params.id})
            .then(dbNote => dbNote.remove())
            .then(dbNote => res.json(dbNote))
            .catch(err => res.status(422).json(err))
    },
    findProtegeNotes: function(req, res) {
        db.Note
            .find({ noteTagged: req.params.id })
            .then(dbNote => res.json(dbNote))
            .catch(err => res.status(422).json(err))
    }
}