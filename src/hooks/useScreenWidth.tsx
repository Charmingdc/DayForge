import { useState, useEffect } from 'react';

const useScreenWidth = (): boolean => {
 const mediaQuery = "(min-width: 726px)";
 const [isLargeScreen, setIsLargeScreen] = useState<boolean>(window.matchMedia(mediaQuery).matches);


 useEffect(() => {
  const media = window.matchMedia(mediaQuery);
         
  const handleChange = (event: MediaQueryListEvent) => {
   setIsLargeScreen(event.matches);
  };

  media.addEventListener("change", handleChange);
  return () => media.removeEventListener("change", handleChange);
}, []);


 return isLargeScreen;
}

export default useScreenWidth;
