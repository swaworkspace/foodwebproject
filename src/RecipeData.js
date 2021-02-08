import React from "react"
import Recipe from "./Recipe"

export default function RecipeData({ recipeData }) {

  return (
    <main>
       <section className="recipes">
        {recipeData.map(recipe => {
          return <Recipe key={recipe.id} recipe={recipe} />
        })}
      </section>
    
     
    </main>
  )
} 