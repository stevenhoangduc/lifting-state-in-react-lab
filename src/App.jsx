// src/App.jsx

import './App.css';
import IngredientList from './components/IngredientList/IngredientList.jsx';
import BurgerStack from './components/BurgerStack/BurgerStack.jsx';
import {useState} from 'react';




const App = () => {
  // initialize state inside the function 
  const [stack, setStack] = useState([]);

  const availableIngredients = [
    { name: 'Kaiser Bun', color: 'saddlebrown' },
    { name: 'Sesame Bun', color: 'sandybrown' },
    { name: 'Gluten Free Bun', color: 'peru' },
    { name: 'Lettuce Wrap', color: 'olivedrab' },
    { name: 'Beef Patty', color: '#3F250B' },
    { name: 'Soy Patty', color: '#3F250B' },
    { name: 'Black Bean Patty', color: '#3F250B' },
    { name: 'Chicken Patty', color: 'burlywood' },
    { name: 'Lettuce', color: 'lawngreen' },
    { name: 'Tomato', color: 'tomato' },
    { name: 'Bacon', color: 'maroon' },
    { name: 'Onion', color: 'lightyellow' },
    { name: 'Cheddar Cheese', color: '#FDE18B' },
    { name: 'Swiss Cheese', color: '#F1E1A8' },
  ];



  // Functions to add an ingrideient to the stack 
  const addToBurger = (ingredient) => {
    setStack([...stack, ingredient]);
  };

  //Fuctions to remove an ingredient from the stack
  const removeFromBurger = (ingredient) => {
    setStack(stack.filter((item) => item !== ingredient));
  }

  // Fuctions to clear the stack
  const clearStack = () => {
    setStack([]);
  }

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section className="constainer">
        <IngredientList ingredients={availableIngredients} addToBurger={addToBurger} />
        <BurgerStack stack={stack} removeFromBurger={removeFromBurger} />
    
      </section>
    </main>
  );
};

export default App;
