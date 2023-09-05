import React, { useState } from "react";

import pizzaContext from "./pizzaContext";

const INITIAL_STATE = { base: "", toppings: [] };

const PizzaContextProvider = ({ children }) => {
  const [pizza, setPizza] = useState(INITIAL_STATE);

  const addBase = (base) => {
    setPizza({ ...pizza, base });
  };

  const addTopping = (topping) => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter((item) => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  };

  const resetPizza = () => {
    setPizza(INITIAL_STATE);
  };

  const contextValue = {
    pizza,
    addBase,
    addTopping,
    resetPizza,
  };

  return (
    <pizzaContext.Provider value={contextValue}>
      {children}
    </pizzaContext.Provider>
  );
};

export default PizzaContextProvider;
