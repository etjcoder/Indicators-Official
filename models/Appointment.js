var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var AppointmentSchema = new Schema({
    type: {
        type: String,
        required: false
    },
    apptname: {
        type: String,
        required: true
    },
    held: {
        type: Boolean,
        required: true,
        default: false
    },
    sold: {
        type: Boolean,
        required: true,
        default: false
    },
    dialer: {
        type: String,
        required: false
    },
    protege: {
        type: String,
        required: true,
        default: "none"
    },
    mentor: {
        type: String,
        required: false
    },
    source: {
        type: String,
        required: false
    },
    date: {
        type: String,
        required: false
    },
    time: {
        type: String,
        required: false
    },
    notes: {
        type: String,
        required: false
    },
    targetMarket: {
        type: String,
        required: false
    }
}, {
    timestamps: {
        createdAt: 'created_at'
    }
})

var Appointments = mongoose.model("Appointments", AppointmentSchema)

module.exports = Appointments


/// Options for type:

// 1A Cashflow Prospect Appt
// 1B BusinessOwner Prospect Appt
// 2A Cashflow Client Appt
// 2B BusinessOwner Client Appt
// 3A Cashflow Natural Appt
// 3B BusinessOwner Natual Appt
// 4A Cashflow Vertical Appt
// 4B BusinessOwner Vertical Appt
// 5A Cashflow Target Appt
// 5B BusinessOwner Target Appt
// 6A Cashflow Nominator Appt
// 6B BusinessOwner Nominator Appt