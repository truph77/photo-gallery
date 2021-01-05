import styled from "styled-components";

const UploadFile = styled.div`
  .upload-file {
    margin: 2rem;
    text-align: center;
  }

  .error {
    color: red;
  }

  .upload--icon-plus {
    font-size: 30px;
    color: red;
    cursor: pointer;
  }

  .upload--icon-plus svg:hover {
    border-radius: 20px;
    background: #dfce39;
  }
`;

export default UploadFile;
