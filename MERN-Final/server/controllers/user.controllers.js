const Pet = require('../models/user.model');

 
module.exports.findAllPets = (req, res) => {
    // whats returned in this section is what is sent to the react app/client side
    Pet.find()
        .then(allDaPets => res.json({ Pets: allDaPets }))
        .catch(err => res.status(400).json( err ));
}
 
module.exports.findOneSinglePet = (req, res) => {
    Pet.findOne({ _id: req.params.id })
        .then(oneSinglePet => res.json({ Pet: oneSinglePet }))
        .catch(err => res.status(400).json(  err ));
}



 
// module.exports.createNewPet = (req, res) => {
   
//      Pet.create(req.body)
//         .then(newlyCreatedPet => res.json({ Pet: newlyCreatedPet }))
//         .catch(err => res.status(400).json(err ));
//     Pet.exists({name: req.body.name})
//         .then(PetExists => {
//             if (PetExists) {
//                 // Promise.reject() will activate the .catch() below.
//                 return Promise.reject('failed');
//             }
//             return Pet.create(req.body);
//         })
//         .then(saveResult => res.json(saveResult))
//         .catch(err => res.status(400).json(err));
    
// }
module.exports.createNewPet = (req, res) => {    
   Pet.exists({name: req.body.name})
       .then(PetExists => {
           if (PetExists) {
               // Promise.reject() will activate the .catch() below.
               return Promise.reject({errors:'Name already exists'});
           }
           return Pet.create(req.body);
       })
       .then(newlyCreatedPet => res.json({ Pet: newlyCreatedPet }))
       .catch(err => res.status(400).json(err));
   
}
 
module.exports.updateExistingPet = (req, res) => {
    Pet.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedPet => res.json({ Pet: updatedPet }))
        .catch(err => res.status(400).json( err ));
}
 
module.exports.deleteAnExistingPet = (req, res) => {
    Pet.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.status(400).json( err ));
}