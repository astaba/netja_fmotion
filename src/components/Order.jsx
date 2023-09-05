import React from "react";
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
      mass: 0.5,
      damping: 9,
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
  disappear: { x: "-100vw", transition: { ease: "easeInOut" } },
};
const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};
const buttonVariants = {
  hover: {
    scale: 1.1,
    boxShadow: "0px 0px 8px rgb(255, 255, 255)",
    textShadow: "0px 0px 8px rgb(255, 255, 255)",
    transition: {
      repeat: 2,
      repeatType: "reverse",
      duration: 0.2,
    },
  },
};

const Order = ({ setIsOpenModal }) => {
  const { pizza } = usePizzaContext();

  const handleReset = () => {
    setIsOpenModal(true);
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="disappear"
      className="container order"
    >
      <h2>Thank you for your order :)</h2>
      <motion.p variants={childVariants}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      {pizza.toppings.map((topping) => (
        <motion.div variants={childVariants} key={topping}>
          {topping}
        </motion.div>
      ))}
      <motion.button
        variants={buttonVariants}
        whileHover="hover"
        type="button"
        onClick={handleReset}
      >
        Reset
      </motion.button>
    </motion.div>
  );
};

export default Order;
