var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var NoteSchema = new Schema({
    noteText: {
        type: String,
        required: true
    },
    noteAuthor: {
        type: Boolean,
        required: true
    },
    noteTagged: {
        type: [String],
        required: true,
        default: "none"
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

var Note = mongoose.model("Note", NoteSchema)

module.exports = Note


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