
import "../../App.css";

const Ingredient = ({ ingredient, onClick, buttonLabel }) => {
    return (
        <li
            className="ingredient-item"
            style={{backgroundColor: ingredient.backgroundColor}}
            >
                {ingredient.name}
                <button className={buttonLabel === "Add" ? "add-button" : "remove-button"} onClick={onClick}>
                    {buttonLabel}
                </button>
        </li>
    );
};

export default Ingredient;
