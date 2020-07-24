const mongoose= require("mongoose");

const schema= mongoose.Schema;

const user_schema= new schema({
    id:schema.ObjectId,
    name:
    {
        type:String,
        required: [true, "Name is required"]

    }
});

module.exports = mongoose.model("user",user_schema);


