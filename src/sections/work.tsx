'use client'

import Card from '@/components/card'
import Link from 'next/link'
import { FC, useRef, useState } from 'react'
import { IoChevronBack, IoChevronForward } from 'react-icons/io5'

interface workProps {

}

const Work: FC<workProps> = ({ }) => {
  const [carouselPosition, setCarouselPosition] = useState(0);
  const carouselItem = useRef(null)

  const items = [1, 2, 3, 4, 5];
  const itemWidth = 27; //rem
  const trackWidth = items.length * itemWidth;

  const next = () => {
    setCarouselPosition((prev) => {
      return (prev + 1) % items.length;
    })
  }

  const previous = () => {
    setCarouselPosition((prev) => {
      let index = prev - 1;
      return index < 0 ? items.length - 1 : index;
      // return (prev - 1) % items.length
    })
  }

  return (
    <section className="w-full max-w-screen section section-content flex flex-col gap-8 border-2 border-teal-700">
      <h2 className="section-header">
        Work
      </h2>
      <div className="h-[40vh] w-full lg:h-[50vh] relative">
        <div className={`h-full w-fit flex gap-4 absolute track translate-x-[-${carouselPosition * 27}rem] transition-all`}>
          {items.map((item) => (
            <Card key={item} image="" title="Interstellar destination" description="unkown, Milky Way" className={`h-full w-[${itemWidth}rem]`} />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <Link href="/" className="link">
          All Work
        </Link>
        <div className="flex items-center justify-between gap-6">
          <button onClick={previous}>
            <IoChevronBack size={20} />
          </button>
          <button onClick={next}>
            <IoChevronForward size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Work