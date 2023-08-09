import recipedata from "./recipe.json";

export default function RecipeImage() {
  const recipeImage = recipedata.map((recipe) => {
     return <div key={recipe.name}>
     <img src={recipe.recipeImage} alt={recipe.name} className="recipeImage" />
  </div>


})
return <div> {recipeImage} </div> 
}

 // export default RecipeImage;
 
 //import json file for the data
 //apply css for className recipeImage
 