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
    sources : {
        type: [String],
        required: false,
        unique: false
    },
    dials: [{
        type: Schema.Types.ObjectId,
        ref: "Dial"
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
    }],
    almaMater: {
        type: String,
        required: false
    },
    homeTown: {
        type: String,
        required: false
    },
    experiencedAdvisor: {
        type: Boolean,
        required: true,
        default: false
    }
},
    {
        timestamps: {
            createdAt: 'created_at'
        }
    })

var Protege = mongoose.model("Protege", ProtegeSchema)

module.exports = Protege;