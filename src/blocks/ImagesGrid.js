import styled from "styled-components";

const ImagesGrid = styled.div`
  .images-grid {
    margin: 20px auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 40px;
  }

  .images-grid--wrap {
    overflow: hidden;
    height: 0;
    padding: 50% 0;

    position: relative;
    opacity: 0.8;
  }

  .images-grid--wrap img {
    min-width: 100%;
    min-height: 100%;
    max-width: 150%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export default ImagesGrid;
