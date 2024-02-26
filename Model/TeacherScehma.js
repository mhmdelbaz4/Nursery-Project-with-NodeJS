const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    id: {type:mongoose.Schema.Types.ObjectId },
    fullName: { type: String, required: true }, 
    email: { type: String, required: true ,unique:true},
    password: { type: String, required: true },
    image: { type: String },
    address: { type: String },
    class :{type:mongoose.Schema.Types.ObjectId,ref:'Class'}
})

module.exports = mongoose.model("Teacher",schema);
