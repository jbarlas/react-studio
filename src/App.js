import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

// test

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  const [cart, setCart] = useState({
    items: bakeryData.map((item) => {
      return { name: item.name, quantity: 0, price: item.price};
    }),
    totalCost: 0
  });

  const addToCart = (id) => {
    const newItems = cart.items.map((item, index) => index === id ? {...item, quantity: item.quantity + 1} : item)
    setCart({...cart, items: newItems, totalCost: cart.totalCost + bakeryData[id].price})
    console.log(cart)
  };

  return (
    <div className="App">
      <div className="bakery-container">
      <h1>Bakey Bakey Eggs and Bakey</h1> {/* TODO: personalize your bakery (if you want) */}
      <div className="bakery-items">
      {bakeryData.map(
        (
          item,
          index // TODO: map bakeryData to BakeryItem components
        ) => (
          // replace with BakeryItem component
          <BakeryItem
            key={index}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
            id={index}
            addToCart={addToCart}
          />
        )
        )}
        </div>
      </div>
      <div className="cart-container">
        <h2>Cart:</h2>
        {cart.items.map(item => {
          return (item.quantity > 0 ?
          (
          <div className="cart-item">
            {item.name}: {item.price} x {item.quantity}
          </div>
          ) : 
          null
        )})
        }
        <hr/>
        <div className="total">Total: {cart.totalCost.toFixed(2)}</div>
      </div>
    </div>
  );
}

export default App;
