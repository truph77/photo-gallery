import React from "react";
import ImagesGridStyle from "../blocks/ImagesGrid";
import useFireStore from "../hook/useFireStore";

const ImagesGrid = ({ setSelectedImg }) => {
  const { docs } = useFireStore("images");

  console.log(docs);
  return (
    <ImagesGridStyle>
      <div className="images-grid">
        {docs &&
          docs.map((doc) => (
            <div
              className="images-grid--wrap"
              key={doc.id}
              onClick={() => setSelectedImg(doc.url)}
            >
              <img src={doc.url} alt="my world" />
            </div>
          ))}
      </div>
    </ImagesGridStyle>
  );
};

export default ImagesGrid;
