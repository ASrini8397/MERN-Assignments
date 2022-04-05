const JokeController = require('../controllers/joke.controllers');
 
module.exports = (app) => {
    app.get('/api/jokes', JokeController.findAllJokes);
    app.get('/api/jokes/:id', JokeController.findOneSingleJoke);
    app.get('/api/random/joke', JokeController.randomJoke);
    app.post('/api/jokes/new', JokeController.createNewJoke);
    app.put('/api/jokes/update/:id', JokeController.updateExistingJoke);
    app.delete('/api/jokes/delete/:id', JokeController.deleteAnExistingJoke);
}