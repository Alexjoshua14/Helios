'use client'

import { FC } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { PiSunHorizonFill } from 'react-icons/pi'

import { cn } from '@/lib/utils'
import { useExpand } from '@/lib/hooks/useExpand'
import { navOptions } from '@/data/nav'

interface desktopnavBarProps extends React.HTMLAttributes<HTMLDivElement> { }

const navVariants = {
  contract: { height: 60 },
  expand: { height: 100 }
}

const DesktopNavBar: FC<desktopnavBarProps> = ({ className }) => {
  const [expand] = useExpand(500)

  return (
    <motion.section
      className={cn(`nav-bar`, className)}
      variants={navVariants}
      animate={expand ? "expand" : 'contract'}
      transition={{ type: "tween", duration: .4, ease: "linear" }}
    >
      <nav className="flex-1 w-full h-full flex items-center justify-center page-margin bottom-border">
        <div className="w-1/4 h-full flex items-center">
          <h1 hidden>Navigation Bar</h1>
          <PiSunHorizonFill size={40} />
        </div>

        <ul className="w-full h-full flex items-center justify-around">
          {navOptions.map((item) => (
            <li key={`desktop-nav-${item.text}`}>
              <Link href={item.link} className="hover:underline">
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.section>
  )
}

export default DesktopNavBar