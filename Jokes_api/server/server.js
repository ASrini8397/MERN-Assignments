const express = require('express');
const app= express();
const PORT= 8000;
require("./config/mongoose.config.js");

//This is the middleware that allows us to access the data from the client side
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
//---------------------------------------------
const AllMyUserRoutes = require("./routes/jokes.routes");
AllMyUserRoutes(app);

// starting the server
app.listen(PORT, ()=> console.log(`server running on ${PORT}`));