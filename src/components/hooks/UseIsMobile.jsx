import { useState, useEffect } from 'react';

// Custom hook to check if screen width is less than 800px
export default function UseIsMobileG() {
  const [isMobile, setIsMobile] = useState(false);

  const checkScreenWidth = () => {
    setIsMobile(window.innerWidth < 700);
  };

  useEffect(() => {
    // Check screen size on mount
    checkScreenWidth();

    // Add event listener for window resize
    window.addEventListener('resize', checkScreenWidth);

    // Clean up event listener on unmount
    return () => window.removeEventListener('resize', checkScreenWidth);
  }, []);

  return isMobile;
}
