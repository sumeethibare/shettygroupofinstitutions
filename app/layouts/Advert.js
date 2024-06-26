"use client";
import React, { useState, useEffect, useRef } from 'react';

export default function Advert() {
  const [currentZoom, setCurrentZoom] = useState(1);
  const videoRef = useRef(null);
  const minZoom = 0.5;
  const maxZoom = 1;
  const stepSize = 0.5;

  useEffect(() => {
    const handleWheel = (event) => {
      const direction = event.deltaY > 0 ? 1 : -1;
      zoomVideo(direction);
    };

    const container = document.getElementById('video-container');
    container.addEventListener('wheel', handleWheel);

    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, [currentZoom]);

  const zoomVideo = (direction) => {
    const newZoom = currentZoom + direction * stepSize;

    if (newZoom < minZoom || newZoom > maxZoom) {
      return;
    }

    setCurrentZoom(newZoom);
    if (videoRef.current) {
      videoRef.current.style.transform = `scale(${newZoom})`;
    }
  };

  return (
    <>
      <div id="video-container" className='bg-black flex items-center justify-center overflow-hidden relative hover:rounded-2xl'>
        <video
          ref={videoRef}
          className="videozoom w-11/12 object-cover lg:h-screen h-[480px] lg:rounded-none lg:p-10 duration-700 rounded-xl lg:mt-0 mt-20 mb-10 hover:scale-110"
          autoPlay
          muted
          loop
        >
          <source
            src="/branding.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </>
  );
}
