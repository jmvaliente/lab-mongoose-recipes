const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const opcionLevel = ["Easy Peasy","Amateur Chef","UltraPro Chef"]
const opcionDishType = ["Breakfast","Dish","Snack","Drink","Dessert","Other"]

const recipeSchema = new Schema({
  title:{type:String, required:true},
  level:{type:String, enum:opcionLevel},
  ingredients:[],
  cuisine:{type:String, required:true},
  dishType:{type:String, enum:opcionDishType},
  image:{type:String, default:'https://images.media-allrecipes.com/images/75131.jpg'},
  duration:{type:Number, min:0},
  creator:{type:String},
  created:{type:Date, default: Date.now}
});

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;
