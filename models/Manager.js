var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ManagerSchema = new Schema({
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
    password: {
        type: String,
        required: true,
        default: "password"
    },
    unitProteges: [{
        type: Schema.Types.ObjectId,
        ref: "Proteges"
    }],
    unitMentors: [{
        type: Schema.Types.ObjectId,
        ref: "Mentors"
    }],
    managerRights: {
        type: Boolean,
        require: true,
        default: true
    }
},
    {
        timestamps: {
            createdAt: 'created_at'
        }
    })

var Manager = mongoose.model("Manager", ManagerSchema)

module.exports = Manager