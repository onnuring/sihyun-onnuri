import { useEffect } from "react";
import { paperBackground, sealingWax } from "../assets/images";

const PreloadAssets = ({ onReady }) => {
  useEffect(() => {
    let loaded = 0;
    const total = 2;

    const handleLoad = () => {
      loaded += 1;
      if (loaded === total) onReady();
    };

    const bgImage = new Image();
    bgImage.src = paperBackground;
    bgImage.onload = handleLoad;

    const waxImage = new Image();
    waxImage.src = sealingWax;
    waxImage.onload = handleLoad;
  }, [onReady]);

  return null;
};

export default PreloadAssets;
