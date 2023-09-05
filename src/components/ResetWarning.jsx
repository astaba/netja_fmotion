import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import usePizzaContext from "../hook/usePizzaContext";

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

const ResetWarning = ({ setIsOpenModal }) => {
  const { resetPizza } = usePizzaContext();
  const navigate = useNavigate();

  const handleCancel = () => {
    setIsOpenModal(false);
  };
  const handleConfirm = () => {
    resetPizza();
    navigate("/");
  };
  return (
    <React.Fragment>
      <div>
        <h2>Ara you sure?</h2>
        <p>
          If you confirm all your choices will be deleted and you&#39;ll be
          taken back to start over again from the home page.
        </p>
      </div>
      <div>
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          type="button"
          onClick={handleCancel}
        >
          Cancel
        </motion.button>
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          type="button"
          onClick={handleConfirm}
        >
          Confirm
        </motion.button>
      </div>
    </React.Fragment>
  );
};

export default ResetWarning;
