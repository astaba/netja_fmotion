import React from "react";
import { motion } from "framer-motion";

const svgVariants = {
  init: {
    rotate: 0,
  },
  anim: {
    rotate: 360,
    transition: {
      duration: 2,
      delay: 1,
      repeat: 1,
      repeatType: "reverse",
    },
  },
};

const pathVariants = {
  init: { pathLength: 1 },
  anim: {
    pathLength: 0,
    transition: {
      duration: 2,
      delay: 1,
      repeat: 1,
      repeatType: "reverse",
    },
  },
};

const Header = () => {
  return (
    <header>
      <div className="logo">
        <motion.svg
          variants={svgVariants}
          initial="init"
          animate="anim"
          className="pizza-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <motion.path
            variants={pathVariants}
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
          />
          <motion.path
            variants={pathVariants}
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
          />
        </motion.svg>
      </div>
      <motion.div
        initial={{ y: -250 }}
        animate={{ y: -10 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
        className="title"
      >
        <h1>Pizza Joint</h1>
      </motion.div>
    </header>
  );
};

export default Header;
