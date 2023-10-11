
import { FC, useState } from 'react'
import Link from 'next/link'

import { AnimatePresence, motion } from 'framer-motion'
import { PiSunHorizonFill } from 'react-icons/pi'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'

import { cn } from '@/lib/utils'
import { navOptions } from '@/data/nav'

interface mobileNavBarProps extends React.HTMLAttributes<HTMLDivElement> { }

const MobileNavBar: FC<mobileNavBarProps> = ({ className }) => {
  const [dropDownShown, setDropDown] = useState(true);
  const transitionDuration = 1.5;

  return (
    <>
      <section className={cn(`nav-bar bg-white`, className)}>
        <nav className="w-full page-margin">
          <div className="h-20 w-full flex items-center justify-between bottom-border">
            <div className="flex gap-3">
              <PiSunHorizonFill size={40} />
              <h1 className="text-lg max-w-[60px] leading-5">
                {`Helios Design`}
              </h1>
            </div>
            <button onClick={() => setDropDown(prev => !prev)}>
              <HiOutlineMenuAlt4 size={32} className="opacity-80" />
            </button>
          </div>
          {/* The rest pertains to the drop down section */}
          <AnimatePresence>
            {dropDownShown && (
              <motion.div
                className="bg-black bg-clip-text"
                initial={{ height: 0 }}
                whileInView={{ height: "auto" }}
                exit={{ height: 0 }}
                transition={{ duration: transitionDuration, ease: 'anticipate' }}
              >
                <ul className="flex flex-col gap-8 py-4 text-transparent">
                  {navOptions.map((item) => (
                    <li key={`mobile-nav-${item.text}`}>
                      <Link href={item.link}>
                        {item.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </section>
      <AnimatePresence>
        {dropDownShown &&
          <motion.div
            className="fixed inset-0 z-30 backdrop-brightness-[.14]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: transitionDuration, ease: "anticipate" }}
          />
        }
      </AnimatePresence>
    </>
  )
}

export default MobileNavBar