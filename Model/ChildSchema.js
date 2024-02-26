const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const ChildSchema = new mongoose.Schema(
    {
        _id:Number,
        fullName: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        level: {
            type: String,
            enum: ['PreKG', 'KG1', 'KG2'],
            required: true
        },
        address: {
            city: String,
            street: String,
            building: String
        },
        class: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Class'
        }
    }
);
ChildSchema.plugin(AutoIncrement, { id: "child_id", inc_field: "_id" });
module.exports = mongoose.model('Child',ChildSchema);
