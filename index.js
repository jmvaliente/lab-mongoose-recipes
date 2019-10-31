const mongoose = require('mongoose');
const Recipe = require('./models/Recipe'); // Import of the model Recipe from './models/Recipe'
const data = require('./data.js');  // Import of the data from './data.js'

// Connection to the database "recipeApp"
mongoose.connect('mongodb://localhost/recipeApp', { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  });

  const recipe = {
    title: 'Huevos con Chorizo',
    level: 'Amateur Chef',
    ingredients: [
      '2 Eggs',
      '1 Chorizo',
      '1 salt',
      '50ml olive oil'
    ],
    cuisine: 'Fusion',
    dishType: 'Dish',
    image: 'http://www.iaba.com/cookbook/images/recipe_19.png',
    duration: 10,
    creator: 'Jose Miguel Brave'
  }
  
  Recipe.create(recipe)
  
  .then ((recipe)=>{
    console.log("Iteration 2 Done")
    return Recipe.insertMany(data)
  })
  .then((recipe)=>{
    console.log("Iteration 3 Done")
    return Recipe.updateOne({ title:"Rigatoni alla Genovese" , duration: 100 })
  })
  .then((recipe)=>{
    console.log("Iteration 4 Done")
    return Recipe.deleteOne({title:"Carrot Cake"})

  })
  .then((recipe)=>{
    console.log("Iteration 5 Done")
    return mongoose.connection.close()
    
  })
  .catch((error)=> console.log("Error"))





