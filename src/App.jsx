import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Base from "./components/Base";
import Toppings from "./components/Toppings";
import Order from "./components/Order";
import { PizzaContextProvider } from "./store/pizzaContext";

function App() {

  return (
    <PizzaContextProvider>
      <Header />
      <Routes>
        <Route path="/base" element={<Base />} />
        <Route path="/toppings" element={<Toppings />} />
        <Route path="/order" element={<Order />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </PizzaContextProvider>
  );
}

export default App;
