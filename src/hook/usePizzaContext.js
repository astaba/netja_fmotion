import { useContext } from "react";
import pizzaContext from "../store/pizzaContext";

const usePizzaContext = () => {
  const contextValue = useContext(pizzaContext);
  return contextValue;
};

export default usePizzaContext;
