const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const ClassSchema = new mongoose.Schema({
    _id: Number,
    name: {
        type: String,
        required: true
    },
    supervisor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teacher'
    },
    children: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Child'
    }]
});

ClassSchema.plugin(AutoIncrement, { id: "class_id", inc_field: "_id" });
module.exports = mongoose.model('Class', ClassSchema);