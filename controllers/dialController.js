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
    }
}