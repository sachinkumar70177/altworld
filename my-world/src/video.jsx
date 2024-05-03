import React, { useState } from "react";
import YouTube from "react-youtube";
import "./video.css";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
const VideoBox = () => {
  const [videoId, setVideoId] = useState("CQXvEGRtMfY"); // Initial video ID

  const handleForward = () => {
    // Set the next YouTube video ID
    setVideoId("crH7kpjomIk");
  };

  const handleBackward = () => {
    // Set the previous YouTube video ID
    setVideoId("jFYdg31Jd0");
  };

  return (
    <div className="video-container">
      <div className="video-wrapper">
        <YouTube videoId={videoId} opts={{ width: "100%", height: "100%" }} />
      </div>
      <div className="button-container">

        <button className="control-button" onClick={handleForward}>
          <ArrowLeftIcon />
        </button>
        <button className="control-button" onClick={handleBackward}>
          <ArrowRightIcon />
        </button>
      </div>
    </div>
  );
};

export default VideoBox;
