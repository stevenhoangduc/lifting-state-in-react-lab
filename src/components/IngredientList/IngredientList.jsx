// src/components/IngredientList/IngredientList.jsx
import React from 'react';
import "../../App.css"
import Ingredient from '../Ingredient/Ingredient'; // Import reusable Ingredient component

const IngredientList = ({ingredients, addToBurger}) => {
    return (
      <div className="ingredient-list">
        <h2>Available Ingredients</h2>
        <ul>
          {ingredients.map((ingredient, index) => (
            <Ingredient 
            key={index}
            ingredient={ingredient} // Applying inline styling/ apply color to the ingredient
            onClick={() => addToBurger(ingredient)}
            buttonLabel="Add"// Show Add button
            />
             
           
          ))}
          </ul>
          <button className="add-button" onClick={addToBurger}>Add Ingredient</button>
      </div>
    )
  };
  
  export default IngredientList;
  