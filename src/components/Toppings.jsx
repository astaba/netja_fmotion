import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import { motion } from "framer-motion";

const Toppings = () => {
  const { addTopping, pizza } = useOutletContext();

  let toppings = [
    "mushrooms",
    "peppers",
    "onions",
    "olives",
    "extra cheese",
    "tomatoes",
  ];

  return (
    <div className="toppings container">
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping) => {
          let spanClass = pizza.toppings.includes(topping) ? "active" : "";
          return (
            <motion.li
              whileHover={{ scale: 1.3, originX: 0, color: "#f8e112" }}
              transition={{ type: "spring", stiffness: 300 }}
              key={topping}
              onClick={() => addTopping(topping)}
            >
              <span className={spanClass}>{topping}</span>
            </motion.li>
          );
        })}
      </ul>

      <Link to="/order">
        <motion.button
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 5px rgb(255, 255, 255)",
            textShadow: "0px 0px 5px rgb(255, 255, 255)",
          }}
        >
          Order
        </motion.button>
      </Link>
    </div>
  );
};

export default Toppings;
