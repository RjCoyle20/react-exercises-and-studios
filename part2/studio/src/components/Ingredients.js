import recipedata from "./recipe.json";

function IngredientList() {
  return (
     <div>
        <h3>Ingredients</h3>
        {recipedata.map((data) => {


export default IngredientList;
 
//import json file for the data
//use a nested map to get inside the inner array
 