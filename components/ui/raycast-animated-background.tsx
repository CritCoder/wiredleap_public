"use client"

import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import UnicornScene from "unicornstudio-react";

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    
    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

export const Component = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { width, height } = useWindowSize();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Don't render anything until component is mounted on client
  if (!isMounted || width === 0 || height === 0) {
    return (
      <div className={cn("flex flex-col items-center w-full h-full bg-black")}>
        {/* Fallback background while loading */}
      </div>
    );
  }

  return (
    <div className={cn("flex flex-col items-center w-full h-full")}>
        <UnicornScene 
        production={true} projectId="cbmTT38A0CcuYxeiyj5H" width={width} height={height} />
    </div>
  );
};
