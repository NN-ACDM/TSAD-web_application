import React from "react";
import ReactPlayer from "react-player";

interface VideoPlayerProps {
  fileName: string;
}

const HLSPlayer: React.FC<VideoPlayerProps> = ({ fileName }) => {
  return (
    <video controls width="640" preload="metadata">
      <source src={`http://localhost:8080/videos/${fileName}`} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default HLSPlayer;
