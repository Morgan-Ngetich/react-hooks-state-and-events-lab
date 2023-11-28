import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [mode, setMode] = useState(false)
  const appClass = mode ? "App dark" : "App light"
  const modeValue = mode ? "Dark Mode" : "Light Mode"

  const handleDarkLight = () => {
    setMode(mode => !mode)
  }
  

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkLight}>{modeValue}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
