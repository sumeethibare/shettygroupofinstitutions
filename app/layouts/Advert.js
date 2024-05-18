"use client";
import React, { useState, useEffect, useRef } from 'react';

export default function Advert() {
  const [currentZoom, setCurrentZoom] = useState(1);
  const videoRef = useRef(null);
  const minZoom = 0.5;
  const maxZoom = 1;
  const stepSize = 0.4;

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
      <div id="video-container" className='h-screen bg-yellow-300 flex items-center justify-center overflow-hidden relative'>

        <h1 className='float-left left-2 text-9xl top-2 absolute font-black text-yellow-400 p-4'>SGI</h1>
        <video
          ref={videoRef}
          className="videozoom w-11/12 object-cover lg:h-screen h-[480px] lg:rounded-none lg:p-10 duration-700 rounded-3xl lg:mt-0 mt-20"
          autoPlay
          muted
          loop
        >
          <source
            src="https://video-bom2-1.xx.fbcdn.net/v/t42.1790-2/438891560_1554116518504716_6787869427765616152_n.mp4?_nc_cat=103&ccb=1-7&_nc_sid=55d0d3&efg=eyJ2ZW5jb2RlX3RhZyI6InN2ZV9zZCIsInZpZGVvX2lkIjoxMDk1ODcwOTg0OTczOTEwfQ%3D%3D&_nc_ohc=wGkoKGcc9lYQ7kNvgHCmIai&_nc_rml=0&_nc_ht=video-bom2-1.xx&oh=00_AYCZPRyzpgg8MnBuTRZmcjLf59NDqXR4yBegVhWEwe9dGg&oe=664BADE1"
            type="video/mp4"
          />
        </video>

        <div>
          {/* the verticAl scroll contents */}
        </div>
      </div>
    </>
  );
}
