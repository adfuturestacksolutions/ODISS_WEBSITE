import React, { useEffect, useState } from "react";

/**
 * TransparentImage Component
 * Uses an offscreen HTML5 Canvas to sample background color from image corners
 * and dynamically convert background pixels into 100% transparent PNG pixels
 * with soft edge anti-aliasing.
 */
const TransparentImage = ({
  src,
  alt = "",
  className = "",
  threshold = 60,
  fadeRange = 35,
  style = {},
  ...props
}) => {
  const [processedUrl, setProcessedUrl] = useState(src);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!src) return;

    let isMounted = true;
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = src;

    img.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const width = img.naturalWidth || img.width;
        const height = img.naturalHeight || img.height;

        if (!width || !height) {
          if (isMounted) {
            setProcessedUrl(src);
            setIsLoaded(true);
          }
          return;
        }

        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0);

        const imageData = ctx.getImageData(0, 0, width, height);
        const data = imageData.data;

        // Sample background color from 4 corners
        const corners = [
          [0, 0],
          [width - 1, 0],
          [0, height - 1],
          [width - 1, height - 1],
        ];

        let bgR = 0, bgG = 0, bgB = 0;
        corners.forEach(([cx, cy]) => {
          const idx = (cy * width + cx) * 4;
          bgR += data[idx];
          bgG += data[idx + 1];
          bgB += data[idx + 2];
        });
        bgR = Math.round(bgR / 4);
        bgG = Math.round(bgG / 4);
        bgB = Math.round(bgB / 4);

        // Process pixel buffer
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];

          // Euclidean color distance from corner background
          const dist = Math.sqrt(
            (r - bgR) ** 2 + (g - bgG) ** 2 + (b - bgB) ** 2
          );

          if (dist < threshold) {
            // Background pixel -> 100% transparent
            data[i + 3] = 0;
          } else if (dist < threshold + fadeRange) {
            // Edge pixel -> smooth alpha transition
            const factor = (dist - threshold) / fadeRange;
            data[i + 3] = Math.floor(data[i + 3] * factor);
          }
        }

        ctx.putImageData(imageData, 0, 0);
        const dataUrl = canvas.toDataURL("image/png");

        if (isMounted) {
          setProcessedUrl(dataUrl);
          setIsLoaded(true);
        }
      } catch (err) {
        console.warn("TransparentImage canvas processing fallback:", err);
        if (isMounted) {
          setProcessedUrl(src);
          setIsLoaded(true);
        }
      }
    };

    img.onerror = () => {
      if (isMounted) {
        setProcessedUrl(src);
        setIsLoaded(true);
      }
    };

    return () => {
      isMounted = false;
    };
  }, [src, threshold, fadeRange]);

  return (
    <img
      src={processedUrl}
      alt={alt}
      className={className}
      style={{
        opacity: isLoaded ? 1 : 0,
        transition: "opacity 0.35s ease-in-out",
        ...style,
      }}
      {...props}
    />
  );
};

export default TransparentImage;
