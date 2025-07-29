import React, { useRef, useEffect } from "react";

const BackgroundMusic = ({ src, play }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      if (play) {
        audioRef.current.play().catch(() => {});
      } else {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }
  }, [src, play]);

  return (
    <audio ref={audioRef} src={src} loop hidden />
  );
};

export default BackgroundMusic;
