import React, { useRef, useEffect } from "react";

const ButtonSound = ({ src, play }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (play && audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }
  }, [play]);

  return <audio ref={audioRef} src={src} hidden />;
};

export default ButtonSound;
