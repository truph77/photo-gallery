import React from "react";
import ImagesGridStyle from "../blocks/ImagesGrid";
import useFireStore from "../hook/useFireStore";
import { motion } from "framer-motion";

const ImagesGrid = ({ setSelectedImg }) => {
  const { docs } = useFireStore("images");

  console.log(docs);
  return (
    <ImagesGridStyle>
      <div className="images-grid">
        {docs &&
          docs.map((doc) => (
            <motion.div
              layout
              whileHover={{ opacity: 1, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="images-grid--wrap"
              key={doc.id}
              onClick={() => setSelectedImg(doc.url)}
            >
              <motion.img
                src={doc.url}
                alt="my world"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              />
            </motion.div>
          ))}
      </div>
    </ImagesGridStyle>
  );
};

export default ImagesGrid;
