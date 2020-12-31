import React, { useEffect } from "react";
import ProgressBarStyle from "../blocks/progressBar";
import useStorage from "../hook/useStorage";

const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);

  // useEffect(() => {
  //   if (url) {
  //     setFile(null);
  //   }
  // }, [url, setFile]);

  return (
    <ProgressBarStyle>
      <div className="progress-bar">{`${progress}%`}</div>
    </ProgressBarStyle>
  );
};

export default ProgressBar;
