const mongoose = require('mongoose');

 
const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "must have a {PATH}"],
        minlength:[3, "{PATH} must be at least 3 characters"]
        // validate: {
        //     validator: () => Promise.resolve(false),
        //     message: 'This name is taken'
        //   }
      
    },
    type:{
        type: String,
        required: [true, "must have a {PATH}"],
        minlength:[3, "{PATH} must be at least 3 characters"]

    },
    description: {
        type: String,
        required: [true, "must have a {PATH}"],
        minlength:[3, "{PATH} must be at least 3 characters"]
    },
    skills1:{
        type: String,
        required: false,
        
    },
    skills2:{
        type: String,
        required: false,
        
    },
    skills3:{
        type: String,
        required: false,
        
    }

},{timestamps: true});

const Pet = mongoose.model('Pet', PetSchema);
 
module.exports = Pet;
