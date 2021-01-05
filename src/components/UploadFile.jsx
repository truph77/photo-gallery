import React, { useState } from "react";
import UploadFile from "../blocks/UploadFile";
import ProgressBar from "../components/progressBar";
import { AiOutlinePlusCircle } from "react-icons/ai";

const UploadFileComponents = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg"];

  const changeHandler = (e) => {
    let selected = e.target.files[0];
    console.log(selected);

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError(null);
    } else {
      setFile(null);
      setError("Oops, Please choose an image file (png or jpeg)!");
    }
  };

  return (
    <UploadFile>
      <form className="upload-file">
        <div className="upload--icon">
          <label for="file-input" className="upload--icon-plus">
            <AiOutlinePlusCircle />
          </label>
          <input
            multiple
            hidden={true}
            id="file-input"
            type="file"
            onChange={changeHandler}
          />
        </div>
        <div className="outPut">
          {error && <div className="error">{error}</div>}
          {file && <div>{file.name}</div>}
          {file && <ProgressBar file={file} setFile={setFile} />}
        </div>
      </form>
    </UploadFile>
  );
};

export default UploadFileComponents;
