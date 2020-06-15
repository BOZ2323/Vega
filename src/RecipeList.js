import React from 'react'
import styles from './RecipeList.module.css'



const RecipeList = ({recipes, query}) => {

    const recipeList = recipes.length ? (recipes.filter( recipe => recipe.Vegetable.includes(query)).map( recipe => {
        let uniqueId = Math.random()
                return (
                    <div className={styles.card} key={uniqueId}>
                        
                        <div className={styles.opaqueBox} >
                            <span className={styles.cardHeading}>{recipe.Vegetable}</span>
                        </div>
                        <img className={styles.foto} src="https://source.unsplash.com/random" alt="random pic"/>
                    </div>
                )
            } 
        )) : null
    return(
        <div className={styles.cardWrapper}>
            <p>{ recipeList }</p>
        </div>
    )
    };

export default RecipeList;
