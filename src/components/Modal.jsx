import React from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";

const backdropVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {duration: 0.4}
  },
};

const modalVariants = {
  hidden: {
    opacity: 0,
    y: "-50vw",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {delay: 0.25}
  },
}

const ModalBackdrop = ({ children, setIsOpenModal }) => {
  const handleClick = (e) => {
    if (e.target === e.currentTarget) setIsOpenModal(false);
  };
  return (
    <motion.div
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="backdrop"
      onClick={handleClick}
    >
      {children}
    </motion.div>
  );
};

const Modal = ({ children, setIsOpenModal }) => {
  return createPortal(
    <React.Fragment>
      <ModalBackdrop setIsOpenModal={setIsOpenModal}>
        <motion.dialog open variants={modalVariants} className="modal">{children}</motion.dialog>
      </ModalBackdrop>
    </React.Fragment>,
    document.getElementById("modal-root")
  );
};

export default Modal;
