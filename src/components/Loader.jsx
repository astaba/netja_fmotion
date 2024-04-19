import React from "react";
import { motion } from "framer-motion";

const loaderVariants = {
  anim: {
    y: [-20, 20],
    transition: {
      y: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 0.4,
        ease: "easeOut",
      },
    },
  },
};
const Loader = () => {
  return (
    <motion.div className="loader" variants={loaderVariants} animate={"anim"} />
  );
};

export default Loader;
