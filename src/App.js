import React, { useState } from "react";
import "./App.css";
import ImagesGrid from "./components/ImagesGrid";
import Title from "./components/Title";
import UploadFile from "./components/UploadFile";
import Modal from "./components/Modal";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Title />
      <UploadFile />
      <ImagesGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;
