import styled from "styled-components";

const Modal = styled.div`
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(187, 150, 163, 0.5);
  }

  .backdrop img {
    display: block;
    max-width: 60%;
    max-height: 80%;
    margin: 60px auto;
    box-shadow: 3px 5px 7px rgba(0, 0, 0, 5);
    border: 3px solid white;
  }
`;

export default Modal;
