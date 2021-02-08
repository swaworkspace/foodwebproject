import React, { useState, useEffect } from "react"

export default function Recipe({ recipe }) {
  const [imageUrl, setImageUrl] = useState("")
  const [sourceUrl, setSourceUrl] = useState("")


  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=cb1c464d94f142c08b156c5beddade8b&includeNutrition=false`
    )
      .then(response => response.json())
      .then(data => {
        setImageUrl(data)
      
      })
      
      .catch(() => {
        console.log("error")
      })
  }, [recipe.id])

  
  
  return (
    <article>
    <h1>{imageUrl.title}</h1>
    <img src={imageUrl.image} alt="recipe" />
    <ul className="instructions">
      <li>Preparation time: {imageUrl.readyInMinutes} minutes</li>
      <li>Number of servings: {imageUrl.servings}</li>
    </ul>

    <a href={imageUrl.sourceUrl}>Go to Recipe</a>
  </article>
  )
}  