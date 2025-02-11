import React from "react";
import "../../App.css"; // Import global styles
import Ingredient from "../Ingredient/Ingredient";

const BurgerStack = ({ stack, removeFromBurger }) => {
  return (
    <div className="burger-stack">
      <h2>Your Burger Stack</h2>

      {/* Conditional Rendering will display messages*/}
      {stack.length === 0 ? (
        <p className="empty-message">No Ingredients</p>
      ) : (
        <ul>
          {stack.map((ingredient, index) => (
            <Ingredient
              key={index}
              ingredient={ingredient}
              onClick={() => removeFromBurger(index)}
              buttonLabel="X" 
            />
          ))}
        </ul>
      )}

      {/* Show "Clear Stack" button only if there are ingredients */}
      {stack.length > 0 && (
        <button className="clear-button" onClick={() => removeFromBurger(-1)}>
          Clear Stack
        </button>
      )}
    </div>
  );
};

export default BurgerStack;
