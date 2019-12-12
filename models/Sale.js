var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var SaleSchema = new Schema({
    clientType: {
        type: String,
        required: true,
        default: "none"
    },
    saleName: {
        type: String,
        required: true
    },
    saleNotes: {
        type: String,
        required: false,
        default: "no notes"
    },
    saleDate: {
        type: Date,
        required: true,
        default: '01/01/2019'
    },
    protege: {
        type: String,
        required: true,
        default: "none"
    },
    mentor: {
        type: String,
        required: true,
        default: "none"
    },
    product: {
        type: String,
        required: true,
        default: ""
    },
    commission: {
        type: Number,
        required: true,
        default: 0
    }, 
    percentageProtege: {
        type: Number,
        required: true,
        default: 0
    },
    percentageMentor: {
        type: Number,
        required: true,
        default: 0
    },
    percentageOther: {
        type: Number,
        required: true,
        default: 0
    },
    leadSource: {
        type: String,
        required: false,
        default: "none"
    },
    targetMarket: {
        type: String,
        required: false,
        default: "none"
    }

}, {
    timestamps: {
        createdAt: 'created_at'
    }
})

var Sale = mongoose.model("Sale", SaleSchema)

module.exports = Sale


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