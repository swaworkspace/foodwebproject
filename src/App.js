import React, { useState } from "react"
import MealList from "./MealList"
import RecipeData from "./RecipeData"
const port = process.env.PORT || 8000;


function App() {
  const [mealData, setMealData] = useState(null)
  const [recipeData, setRecipeData] = useState(null)

  const [calories, setCalories] = useState(2000)


  function getMealData() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=04a67efb0e21458a82720b1fcf3496e1&timeFrame=day&diet=vegetarian&targetCalories=${calories}`
    )
      .then(response => response.json())
      .then(data => {
        setMealData(data)
      })
      .catch(() => {
        console.log("error")
      })
  }

  function getRecipesFromIngreds() {
    fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=04a67efb0e21458a82720b1fcf3496e1&ingredients=apples,+flour,+sugar&number=3`
    )
      .then(response => response.json())
      .then(data => {
        setRecipeData(data)
      })
      .catch(() => {
        console.log("error")
      })
  }



  function handleChange(e) {
    setCalories(e.target.value)
  }


  return (
    <div className="App">
      <section className="controls">
        <input
          type="number"
          placeholder="Calories (e.g. 2000)"
          onChange={handleChange}
        />
        <button onClick={getMealData}>Get Daily Meal Plan</button>
        <button onClick={getRecipesFromIngreds}>Get Recipes From Given Ingredients</button>

      </section>
      {mealData && <MealList mealData={mealData} />}
      {recipeData && <RecipeData recipeData={recipeData} />}
    </div>
  )
}

export default App