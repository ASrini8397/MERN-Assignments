const UserController = require('../controllers/user.controllers');

 
module.exports = (app) => {
    app.get('/api/pet/:id', UserController.findOneSinglePet);
    app.get('/api/pet', UserController.findAllPets);
    app.put('/api/pet/:id', UserController.updateExistingPet);
    app.post('/api/pet', UserController.createNewPet);
    app.delete('/api/pet/:id', UserController.deleteAnExistingPet);
    
}