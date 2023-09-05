import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Header from "./components/Header";
import Home from "./components/Home";
import Base from "./components/Base";
import Toppings from "./components/Toppings";
import Order from "./components/Order";
import { PizzaContextProvider } from "./store/pizzaContext";

function App() {
  const location = useLocation();
  // console.log(location);

  return (
    <PizzaContextProvider>
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/base" element={<Base />} />
          <Route path="/toppings" element={<Toppings />} />
          <Route path="/order" element={<Order />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </AnimatePresence>
    </PizzaContextProvider>
  );
}

export default App;
