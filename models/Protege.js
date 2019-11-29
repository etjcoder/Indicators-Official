var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ProtegeSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
    uid: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        required: false,
        default: ""
    },
    lastName: {
        type: String,
        required: false,
        default: ""
    },
    mentor: {
        type: String,
        required: false,
        default: ""
    },
    manager: {
        type: String,
        required: true,
        default: "Joe Naselli"
    },
    dials: [{
        type: Schema.Types.ObjectId,
        ref: "Dials"
    }],
    appointments: [{
        type: Schema.Types.ObjectId,
        ref: "Appointments"
    }],
    todos: [{
        type: Schema.Types.ObjectId,
        ref: "Todos"
    }],
    sales: [{
        type: Schema.Types.ObjectId,
        ref: "Sales"
    }]
},
    {
        timestamps: {
            createdAt: 'created_at'
        }
    })

var Protege = mongoose.model("Protege", ProtegeSchema)

module.exports = Protege;