var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var NoteSchema = new Schema({
    body: {
        type: String,
        required: true
    },
    author: {
        type: Boolean,
        required: true
    },
    protege: {
        type: String,
        required: true,
        default: "none"
    },
    read: {
        type: Boolean,
        required: false
    },
    completed: {
        type: Boolean,
        required: false
    }
}, {
    timestamps: {
        createdAt: 'created_at'
    }
})

var Notes = mongoose.model("Notes", NoteSchema)

module.exports = Notes


/// Options for type:

// 1A Cashflow Prospect Dials
// 1B BusinessOwner Prospect Dials
// 2A Cashflow Client Dials
// 2B BusinessOwner Client Dials
// 3A Cashflow Natural Dials
// 3B BusinessOwner Natual Dials
// 4A Cashflow Vertical Dials
// 4B BusinessOwner Vertical Dials
// 5A Cashflow Target Dials
// 5B BusinessOwner Target Dials