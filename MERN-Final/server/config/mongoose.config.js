const mongoose= require('mongoose');
const DATABASE= "author_db";
mongoose.connect('mongodb://localhost/'+ DATABASE , {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));