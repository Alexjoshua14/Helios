import Link from 'next/link'
import { FC } from 'react'

interface footerProps {

}

const Footer: FC<footerProps> = ({ }) => {
  return (
    <section className="w-full footer flex flex-col gap-6">
      <h2 className="font-medium">
        Helios Design
      </h2>
      <div className="h-full flex flex-col sm:flex-row gap-14 justify-between sm:items-end">
        <div className="h-full flex flex-col justify-end gap-8 order-2 sm:order-1">
          <div className="flex gap-2">
            <p>
              Privacy Policy
            </p>
            <p>
              |
            </p>
            <p>
              Terms & Conditions
            </p>
          </div>
          <p>
            <s>Copyright © 1970 Helios Design</s>
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-14 sm:gap-8 sm:order-2">
          <ul className="flex flex-col gap-5" aria-label='contact'>
            <li>
              info@helios.no
            </li>
            <li>
              (555) 972 1932
            </li>
            <li>
              <Link href="/">
                Careers
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-5">
            <li>
              <Link href="https://instagram.com/aartistry14">
                Instagram
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/alexander-joshua">
                LinkedIn
              </Link>
            </li>
            <li>
              <Link href="https://github.com/alexjoshua14">
                Github
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Footer