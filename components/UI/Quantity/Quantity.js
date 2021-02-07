import React from 'react';

const Quantity = () => {
  return (
    <div>
      <label for="quantity">Quantity:</label>

      <input type="number" id="quantity" name="quantity" min="1" max="5" />
    </div>
  );
};

export default Quantity;
