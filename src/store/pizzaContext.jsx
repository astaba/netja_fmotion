import { createContext } from "react";

const pizzaContext = createContext({
  pizza: { base: "", toppings: [] },
  addBase: () => {},
  addToppings: () => {},
  resetPizza: () => {},
});

export default pizzaContext;
