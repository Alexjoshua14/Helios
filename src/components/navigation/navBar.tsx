'use client'

import { FC, useEffect, useState } from 'react'

import MobileNavBar from './mobileNavBar'
import DesktopNavBar from './desktopNavBar'

interface navBarProps {

}

const NavBar: FC<navBarProps> = ({ }) => {
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

  return (
    <>
      {mobile && <MobileNavBar />}
      {!mobile && <DesktopNavBar />}
    </>
  )
}

export default NavBar