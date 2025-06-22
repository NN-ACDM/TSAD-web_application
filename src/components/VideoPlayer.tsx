"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

const baseUrl = process.env.NEXT_PUBLIC_BASE_API_URL;

const VideoPlayer = ({ fileName }: { fileName: string }) => {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchUrl = async () => {
      // const res = await axios.post('http://localhost:8080/api/videos/access-url', { videoFileName: fileName });
      // setVideoUrl('http://localhost:8080/api/videos/stream/' + res.data.accessVideoToken);
      const res = await axios.post(
        baseUrl + "/api/videos/access-url",
        { username: "asdasd", expiredDate: "2025-06-08_15:12:00", category: "video", path: "", filename: "HSYF7518.MP4" }
      );
      setVideoUrl(
         baseUrl + "/api/videos/stream/" + res.data.mediaAccessToken
      );
    };
    fetchUrl();
    const interval = setInterval(fetchUrl, 3600000);
    return () => clearInterval(interval);
  }, [fileName]);

  return (
    <div>
      {videoUrl ? (
        <video width="640" height="360" autoPlay controls>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <p>Loading video...</p>
      )}
    </div>
  );
};

export default VideoPlayer;
