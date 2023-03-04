const mongoose = require('mongoose');

const userSchema =  mongoose.Schema({

    username : {
        type : "String",
        required :[true,'Please enter userName'],
    },

    email : {
        type : "String",
        required :[true,'Please enter email'],
        unique :[true ,"email is already exist"],
    },

    password : {
        type : "String",
        required :[true,'Please enter password'],
    }

},
{
    timestamps :true,
}
);

module .exports = mongoose.model("User", userSchema);