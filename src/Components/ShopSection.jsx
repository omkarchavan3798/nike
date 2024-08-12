import React, { useState } from 'react';
import Product from "../Data/Product.json"
import './ShopSection.css';

const ShopSection = () => {
  const [selectedShoe] = useState(Product.shoes.find(shoe => shoe.name === "Nike Air Max Infinity"));
  const [selectedColor, setSelectedColor] = useState(selectedShoe.colorways[0]);

  return (
    <section id="shop">
      <h2>Available Colorways</h2>
      <div className="selected-color">
        <img src={selectedColor.image} alt={selectedColor.name} />
        <p>{selectedColor.name}</p>
      </div>
      <div className="color-options">
        {selectedShoe.colorways.map((color, index) => (
          <img
            key={index}
            src={color.image}
            alt={color.name}
            onClick={() => setSelectedColor(color)}
            // className={selectedColor.name === color.name ? 'active' : ''}
          />
        ))}
      </div>
      <button className='my-btn' onClick={() => window.location.href = 'https://www.nike.com'}>Visit Nike Store</button>
    </section>
  );
};

export default ShopSection;
