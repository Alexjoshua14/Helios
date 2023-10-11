import { useState, useEffect } from "react";


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