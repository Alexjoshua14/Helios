import { useState, useEffect } from "react";

/**
 * Exposes a mobile boolean that is true when the viewport width
 * is less than 640px.
 * 
 * @returns mobile boolean
 */
export function useMobile() {
  const [mobile, setMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setMobile(true);
      } else {
        setMobile(false)
      }
    }
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return [mobile]
}