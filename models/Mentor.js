var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var MentorSchema = new Schema({
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
    dials: [{
        type: Schema.Types.ObjectId,
        ref: "Dials"
    }],
    appointments: [{
        type: Schema.Types.ObjectId,
        ref: "Appointments"
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
    previousAdvisor: {
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

var Mentor = mongoose.model("Mentor", MentorSchema)

module.exports = Mentor