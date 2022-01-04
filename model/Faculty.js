const mongoose = require("mongoose");

const facultySchema = new mongoose.Schema({

    Name : String,
    
    email : String,
    
    salary : Number,


});



module.exports = mongoose.model("Faculty",facultySchema);