import React from "react";
import ImagesGridStyle from "../blocks/ImagesGrid";
import useFireStore from "../hook/useFireStore";

const ImagesGrid = () => {
  const { docs } = useFireStore("images");

  console.log(docs);
  return (
    <ImagesGridStyle>
      <div className="images-grid">
        {docs &&
          docs.map((doc) => (
            <div className="images-grid--wrap" key={doc.id}>
              <img src={doc.url} alt="uploaded image" />
            </div>
          ))}
      </div>
    </ImagesGridStyle>
  );
};

export default ImagesGrid;
