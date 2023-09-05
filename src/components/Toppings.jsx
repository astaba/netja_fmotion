import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import usePizzaContext from "../hook/usePizzaContext";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      delay: 0.5,
    },
  },
  disappear: { x: "-100vw", transition: { ease: "easeInOut" } },
};

const listVariants = {
  hover: {
    scale: 1.3,
    originX: 0,
    color: "#f8e112",
    transition: { type: "spring", stiffness: 300 },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.1,
    boxShadow: "0px 0px 8px rgb(255, 255, 255)",
    textShadow: "0px 0px 8px rgb(255, 255, 255)",
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 0.2,
    },
  },
};

const Toppings = () => {
  const { addTopping, pizza } = usePizzaContext();

  let toppings = [
    "mushrooms",
    "peppers",
    "onions",
    "olives",
    "extra cheese",
    "tomatoes",
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="disappear"
      className="toppings container"
    >
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping) => {
          let spanClass = pizza.toppings.includes(topping) ? "active" : "";
          return (
            <motion.li
              variants={listVariants}
              whileHover="hover"
              key={topping}
              onClick={() => addTopping(topping)}
            >
              <span className={spanClass}>{topping}</span>
            </motion.li>
          );
        })}
      </ul>

      <Link to="/order">
        <motion.button variants={buttonVariants} whileHover="hover">
          Order
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Toppings;
