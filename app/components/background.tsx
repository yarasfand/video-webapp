"use client";

import { useEffect, useState, useRef } from "react";
import { useLandingPageScroll } from "../state/scroll.slice";
import { useSelector } from "react-redux";

const videos = [
  "/background/Screen 1.mp4",
  "/background/Screen 1-2.mp4",
  "/background/Screen 2-1.mp4",
  "/background/Screen 2.mp4",
  "/background/Screen 3.mp4",
];

export function Background() {
  const scrollPage = useSelector(useLandingPageScroll);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [prevScrollPage, setPrevScrollPage] = useState(0); 
  const videoRefs = useRef([]);

  useEffect(() => {
    if (prevScrollPage === 0 && scrollPage === 1) {
      // Play the second video
      setCurrentVideoIndex(1);

      // After 300ms, switch to the third video
      const timeoutId = setTimeout(() => {
        setCurrentVideoIndex(3);
        setPrevScrollPage(scrollPage);
      }, 300);

      return () => clearTimeout(timeoutId);
    }

    if (prevScrollPage === 1 && scrollPage === 0) {
      // Play the second video
      setCurrentVideoIndex(2);

      // After 300ms, switch to the first video
      const timeoutId = setTimeout(() => {
        setCurrentVideoIndex(0);
        setPrevScrollPage(scrollPage);
      }, 300);

      return () => clearTimeout(timeoutId);
    }

    if (scrollPage === 0) {
      setCurrentVideoIndex(0);
      setPrevScrollPage(scrollPage);
    }

    if (prevScrollPage === 2 && scrollPage === 1) {
      setCurrentVideoIndex(3);
      setPrevScrollPage(scrollPage);
    }

    if (scrollPage === 2) {
      setCurrentVideoIndex(4);
      setPrevScrollPage(scrollPage);
    }
  }, [scrollPage, prevScrollPage]);

  useEffect(() => {
    if (videoRefs.current[currentVideoIndex]) {
      // Reset the current video time to 0 whenever the current video changes
      videoRefs.current[currentVideoIndex].currentTime = 0;
      videoRefs.current[currentVideoIndex].play();
    }
  }, [currentVideoIndex]);

  return (
    <div className="absolute top-0 z-[1] w-[100vw] h-[100vh] cursor-default pointer-events-none">
      {videos.map((video, index) => (
        <video
          key={video}
          ref={(el) => (videoRefs.current[index] = el)}
          src={video}
          className={`w-full object-cover h-full ${
            index === currentVideoIndex ? "" : "hidden"
          }`}
          autoPlay
          muted
          loop
        />
      ))}
    </div>
  );
}
