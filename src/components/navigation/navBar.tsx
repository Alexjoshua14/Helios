'use client'

import { FC } from 'react'

import MobileNavBar from './mobileNavBar'
import DesktopNavBar from './desktopNavBar'
import { useMobile } from '@/lib/hooks/useMobile'

interface navBarProps {

}

const NavBar: FC<navBarProps> = ({ }) => {
  const [mobile] = useMobile()

  return (
    <>
      {mobile && <MobileNavBar />}
      {!mobile && <DesktopNavBar />}
    </>
  )
}

export default NavBar