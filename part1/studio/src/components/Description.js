import styles from './Description.module.css';
import React from 'react';

function RecipeAuthor () {
    let authorLink = "https://www.delish.com/cooking/recipe-ideas/a26258638/easy-boiled-dinner-recipe/";
    let authorPhoto = "https://hips.hearstapps.com/rover/profile_photos/743afec2-8cb0-4247-8722-05b4d891fe7a_1576786937.file?fill=1:1&resize=160:*";
    let authorName = "Makinze Gore";
    return (
        <div className = {styles.recipeAuthorBlock}>
            <img src = {authorPhoto} alt = "Look at that boiled dinner ᏊˊꈊˋᏊ" className = {styles.imageUpdates} />
            <div>
                <h3> {authorName} </h3>
                <a href = {authorLink}> Delish- Boiled Dinner</a>
            </div>
        </div>
    )
}

class RecipeDescription extends React.Component {
    render() {
        return (
        <div> 
        <div>
           <h1>Boiled Dinner</h1>
           <p>If the name, 'Corned Beef and Cabbage' doesn't do it for you! </p>
        </div>
        <RecipeAuthor />
     </div>
        )
    }
}

export default RecipeDescription;