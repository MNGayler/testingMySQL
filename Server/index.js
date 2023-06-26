const express = require('express');
const app = express();

const db = require('./models');
app.use(express.json());


//Routers

const nutrientRouter = require('./routes/FoodNutrients');
app.use("/FoodNutrients", nutrientRouter)


db.sequelize.sync().then(()=> {
    app.listen(3002, () => {
    console.log("server running on port 3002");
    }); 
});


