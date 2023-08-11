const RecipeAuthor = () => {
   let authorLink = "https://www.halfbakedharvest.com/sticky-ginger-soy-chicken/";
   let authorPhoto = "https://secure.gravatar.com/avatar/49ee4a23a1d5dffb1944da32800bb254?s=48&d=mm&r=pg";
   let authorName = "Tieghan";

   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["2 pounds chicken breasts or thighs, cut into 2 inch cubes", 
   "3 cups broccoli florets",
   "1/2 cup honey",
   "1/3 cup tamari or soy sauce",
   "jasmine rice, for serving"
];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Sheet Pan Sticky Ginger Soy Chicken and Broccoli</h1>
            <p>This simple Sheet Pan Sticky Ginger Soy Chicken and Broccoli is about to become your new go-to meal. Easy homemade, extra saucy chicken, tossed in a gingery, sweet, spicy, and extra sticky honey soy sauce. Serve with steamed rice and broccoli – cooked right alongside the chicken – for the easiest sheet pan dinner. </p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://www.halfbakedharvest.com/wp-content/uploads/2022/12/Sheet-Pan-Sticky-Ginger-Soy-Chicken-and-Broccoli-7-1024x1536.jpg" alt="Sticky Ginger Soy Chicken" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}