import React from "react";
import ModalStyled from "../blocks/Modal";
import { motion } from "framer-motion";

const Modal = ({ selectedImg, setSelectedImg }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };

  return (
    <ModalStyled>
      <motion.div
        className="backdrop"
        onClick={handleClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.img
          src={selectedImg}
          alt="pic modal"
          initial={{ y: "-100vh" }}
        />
      </motion.div>
    </ModalStyled>
  );
};

export default Modal;
