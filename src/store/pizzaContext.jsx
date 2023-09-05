import React, { createContext, useContext, useState } from "react";

const pizzaContext = createContext({
  pizza: { base: "", toppings: [] },
  addBase: () => {},
  addToppings: () => {},
});

export const usePizzaContext = () => {
  const contextValue = useContext(pizzaContext);
  return contextValue;
};

export const PizzaContextProvider = ({ children }) => {
  const [pizza, setPizza] = useState({ base: "", toppings: [] });

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

  const contextValue = {
    pizza,
    addBase,
    addTopping,
  };

  return (
    <pizzaContext.Provider value={contextValue}>
      {children}
    </pizzaContext.Provider>
  );
};
