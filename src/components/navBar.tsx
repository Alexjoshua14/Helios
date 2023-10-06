import Link from 'next/link'
import { FC } from 'react'
import { PiSunHorizonFill } from 'react-icons/pi'

interface navBarProps {

}

const NavBar: FC<navBarProps> = ({ }) => {
  return (
    <section className="nav-bar flex items-center justify-between backdrop-blur-3xl">
      <nav className="flex-1 w-full h-full flex items-center justify-center page-margin border-b-[1px] border-underline">
        <div className="w-1/4 h-full flex items-center">
          <h1 hidden>NAV</h1>
          <PiSunHorizonFill size={40} />
        </div>

        <ul className="w-full h-full flex items-center justify-around">
          <li>
            <Link href="/">
              <h2>
                Work
              </h2>
            </Link>
          </li>
          <li>
            <Link href="/">
              <h2>
                About
              </h2>
            </Link>
          </li>
          <li>
            <Link href="/">
              <h2>
                Recently
              </h2>
            </Link>
          </li>
          <li>
            <Link href="/">
              <h2>
                Contact
              </h2>
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  )
}

export default NavBar