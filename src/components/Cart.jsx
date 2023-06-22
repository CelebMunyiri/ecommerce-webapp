import React from 'react'


function Cart({cart,calculateTotal}) {
    return (
        <div id="cart">
          <h2>Shopping Cart</h2>
          {cart.map(product => (
            <div key={product.name}>{product.name} - ${product.cost}</div>
          ))}
          <p>Total Price: ${calculateTotal()}</p>
        </div>
      );
}

export default Cart
