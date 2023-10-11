import { useState, useEffect } from "react";


export function useMobile() {
  const [mobile, setMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
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