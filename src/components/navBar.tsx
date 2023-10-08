'use client'

import { FC } from 'react'
import Link from 'next/link'

import { useExpand } from '@/lib/hooks/useExpand'

import { PiSunHorizonFill } from 'react-icons/pi'

interface navBarProps {

}

const navOptions = [
  {
    link: '/',
    text: 'Work',
  },
  {
    link: '/',
    text: 'About',
  },
  {
    link: '/',
    text: 'Recently',
  },
  {
    link: '/',
    text: 'Contact',
  },
]

const NavBar: FC<navBarProps> = ({ }) => {
  const [expand] = useExpand(500)

  return (
    <section className={`nav-bar flex items-center justify-between backdrop-blur-3xl ${expand ? "nav-expand" : "nav-collapse"}`}>
      <nav className="flex-1 w-full h-full flex items-center justify-center page-margin border-b-[1px] border-underline">
        <div className="w-1/4 h-full flex items-center">
          <h1 hidden>Navigation Bar</h1>
          <PiSunHorizonFill size={40} />
        </div>

        <ul className="w-full h-full flex items-center justify-around">
          {navOptions.map((item) => (
            <li key={`nav-${item.text}`}>
              <Link href={item.link}>
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  )
}

export default NavBar