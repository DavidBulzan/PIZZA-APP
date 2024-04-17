import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>React JS 
         Pizza CO
         </h1>;
    </header>
  );
}

function Pizza({pizzaObj}) {
  return (
    <li className= {`pizza ${pizzaObj.soldOut ? 'sold-out' : ''}`}>
      <img src={pizzaObj.photoName} alt="" />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut? 'SOLD OUT' : pizzaObj.price + '$'}</span>
      </div>
    </li>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our menu</h2>
      {numPizzas > 0 ? (
      <React.Fragment>
        <p>
          Authentic Italian couisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.
        </p>
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      </React.Fragment>
      ) : (
        <p>We're still working on our menu</p>
      )}
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 7;
  const closingHour = 22;
  const isOpen = hour >= openHour && hour <= closingHour;
 
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closingHour={closingHour} hour={hour}/>
      ) : (
        <p>Right now we're closed, but we're happy to welcome you between {openHour}:00 and {closingHour}:00</p>
      )}
    </footer>
  );
  // return React.createElement("footer", null, "We-re currrently open");
}

function Order({closingHour, hour}) {
  return(
  <div className="footer">
  <p>We're closing in {closingHour - hour} hours, come visit us or order online</p>
  <button className="btn"> <a href="https://www.pizzahut.ro/meniu-restaurant/oferte?gad_source=1&gclid=CjwKCAjw5ImwBhBtEiwAFHDZx2ut0lLBTYZlsi_bp1nbWTNsMwIYpq5lBxyr67SW6cMtjiGddLBg3RoCvcQQAvD_BwE">Order</a></button>
</div>)
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
