"use client";
import React, { useRef, useState } from "react";
import YouTube from "react-youtube";

const MaxGoldADS = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const playerRef = useRef(null);

  const onPlayerReady = (event) => {
    playerRef.current = event.target;
    event.target.mute(); // Mute the video to ensure autoplay works across browsers
    event.target.playVideo(); // Auto-play video when ready
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
    setIsPlaying(!isPlaying);
  };

  // Different dimensions for different screen sizes
  const optsMobile = {
    height: "175px",
    width: "100%",
    playerVars: {
      autoplay: 1,
      loop: 1,
      playlist: "wTTw4m7HUQE",
      controls: 0,
      modestbranding: 1,
      rel: 0,
      fs: 0,
      iv_load_policy: 3,
      disablekb: 1,
      mute: 1,
    },
  };

  const optsTablet = {
    height: "300px",
    width: "100%",
    playerVars: {
      autoplay: 1,
      loop: 1,
      playlist: "wTTw4m7HUQE",
      controls: 0,
      modestbranding: 1,
      rel: 0,
      fs: 0,
      iv_load_policy: 3,
      disablekb: 1,
      mute: 1,
    },
  };

  const optsLaptop = {
    height: "450px",
    width: "100%",
    playerVars: {
      autoplay: 1,
      loop: 1,
      playlist: "wTTw4m7HUQE",
      controls: 0,
      modestbranding: 1,
      rel: 0,
      fs: 0,
      iv_load_policy: 3,
      disablekb: 1,
      mute: 1,
    },
  };

  return (
    <div className="flex flex-col items-center justify-center bg-purple p-10 ">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-white">
        Max <span className="text-yellow-400">Gold</span> Channel
      </h2>
      <div className="w-20 h-1 bg-white mx-auto mb-12"></div>

      <div className="w-full items-center">
        {/* Mobile */}
        <div className=" md:hidden w-[100%] overflow-hidden rounded-md">
          <YouTube videoId="wTTw4m7HUQE" opts={optsMobile} onReady={onPlayerReady} />
        </div>

        {/* Tablet */}
        <div className="hidden md:block lg:hidden w-[79%] mx-auto overflow-hidden rounded-md">
          <YouTube videoId="wTTw4m7HUQE" opts={optsTablet} onReady={onPlayerReady} />
        </div>

        {/* Laptop */}
        <div className="hidden lg:block w-[65%] mx-auto overflow-hidden rounded-md">
          <YouTube videoId="wTTw4m7HUQE" opts={optsLaptop} onReady={onPlayerReady} />
        </div>
      </div>
    </div>
  );
};

export default MaxGoldADS;