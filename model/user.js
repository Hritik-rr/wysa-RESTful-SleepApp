const mongoose = require("mongoose");

const sleepSchema = {
    name : {
        type : String,
        required : true
    },
    changeOption : {
        type : [],
        required : true
    },
    sleepIssueHistory : {
        type : String,
        enum : ["Last 2 weeks", "2 to 8 weeks", "More than 8 weeks"],
        default : "Last 2 weeks",
        required: true
    },
    sleepStart : {
        type : String,
        required: true
    },
    sleepEnd : {
        type : String,
        required: true
    },
    sleepDuration : {
        type : Number,
        min : 1,
        max : 10,
        required: true
    }
};

const Sleep = mongoose.model("sleeps", sleepSchema);
module.exports = Sleep;

