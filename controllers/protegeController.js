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

    }
}