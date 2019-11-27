var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var SalesSchema = new Schema({
    type: {
        type: String,
        required: true
    },
    product: {
        type: String,
        required: true,
        default: ""
    },
    premium: {
        type: Number,
        required: true,
        default: 0
    },
    commissions: {
        type: Number,
        required: true,
        default: 0
    }, 
    percentageDialer: {
        type: Number,
        required: true,
        default: 0
    },
    percentageSourceOne: {
        type: Number,
        required: true,
        default: 0
    },
    percentageSourceTwo: {
        type: Number,
        required: true,
        default: 0
    },
    percentageSourceThree: {
        type: Number,
        required: true,
        default: 0
    },
    percentageOther: {
        type: Number,
        required: true,
        default: 0
    },
    dialer: {
        type: String,
        required: true
    },
    source: {
        type: String,
        required: true
    },
    propProduct: {
        type: Boolean,
        required: true,
        default: false
    }
}, {
    timestamps: {
        createdAt: 'created_at'
    }
})

var Sales = mongoose.model("Sales", SalesSchema)

module.exports = Sales


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