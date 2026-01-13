const mongoose = require("mongoose");
const TaskSchema = mongoose.Schema({
    task:{
        type:String,
        required:true
    },
    isdone: {
        type: Boolean,
        default: false
    }
}); 

module.exports = mongoose.model("Task",TaskSchema);