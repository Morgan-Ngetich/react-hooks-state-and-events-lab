import React, {useState} from "react";


function Item({ name, category }) {
  const [change, setChange] = useState(false)
  const itemClass = change ? "in-cart" : ""; 
  const addToCartBtn = change ?  "Remove From Cart" : "Add To cart" 
  
  const addRemoveBtnClass = change ? "remove" : "add" 


  const handleAddToCart = () => {
    
    setChange(change => !change)
  }
  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button 
      className={addRemoveBtnClass} 
      onClick={handleAddToCart}
      >
        {addToCartBtn}
      </button>
    </li>
  );
}

export default Item;
