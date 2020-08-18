import React from "react";
import styles from "./RecipeList.module.css";
import RecipeDetails from "./ RecipeDetails";

const RecipeList = ({ recipes, query }) => {
  const displayFoto = () => {
    console.log("RecipeDetails");
  };

  const recipeList = recipes.length
    ? recipes
        .filter((recipe) => recipe.Vegetable.includes(query))
        .map((recipe) => {
          let uniqueId = recipe.id;
          return (
            <div className={styles.card} key={uniqueId}>
              <div className={styles.opaqueBox}>
                <span className={styles.cardHeading}>{recipe.Vegetable}</span>
              </div>
              <img
                onClick={displayFoto}
                className={styles.foto}
                src="https://source.unsplash.com/random/landscape"
                alt="random pics"
              />
            </div>
          );
        })
    : null;
  return (
    <div className={styles.cardWrapper}>
      <dd>{recipeList}</dd>
    </div>
  );
};

export default RecipeList;
