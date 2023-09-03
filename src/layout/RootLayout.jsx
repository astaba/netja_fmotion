import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/Header";

const RootLayout = () => {
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

  return (
    <div>
      <Header />
      <Outlet context={{ addBase, addTopping, pizza }} />
    </div>
  );
};

export default RootLayout;
