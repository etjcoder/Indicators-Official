var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var DialSchema = new Schema({
    type: {
        type: String,
        required: false
    },
    contact: {
        type: Boolean,
        required: false,
        default: false
    },
    scheduled: {
        type: Boolean,
        required: false,
        default: false
    },
    level: {
        type: String,
        required: false,
        default: "N/A"
    },
    dialer: {
        type: String,
        required: false,
        default: "none"
    },
    source: {
        type: String,
        required: true,
        default: "none"
    },
    targetMarket: {
        type: String,
        required: true,
        default: "none"
    },
    mentorTagged: {
        type: String,
        required: true,
        default: "none"
    }
}, {
    timestamps: {
        createdAt: 'created_at'
    }
});

var Dial = mongoose.model("Dial", DialSchema)

module.exports = Dial


/// Options for type:

// CPD Cashflow Prospect Dials
// BPD BusinessOwner Prospect Dials
// CCD Cashflow Client Dials
// BCD BusinessOwner Client Dials
// CND Cashflow Natural Dials
// BND BusinessOwner Natural Dials
// CVD Cashflow Vertical Dials
// BVD BusinessOwner Vertical Dials
// CTD Cashflow Target Dials
// BTD BusinessOwner Target Dials