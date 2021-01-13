import React from "react";
import ModalStyled from "../blocks/Modal";

const Modal = ({ selectedImg, setSelectedImg }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };

  return (
    <ModalStyled>
      <div className="backdrop" onClick={handleClick}>
        <img src={selectedImg} alt="pic modal" />
      </div>
    </ModalStyled>
  );
};

export default Modal;
