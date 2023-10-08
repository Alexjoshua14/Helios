'use client'

import { FC, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { IoChevronBack, IoChevronForward } from 'react-icons/io5'
import Card from './card';
import { CardInterface } from '@/types/card';
import { cn } from '@/lib/utils'

interface carouselProps extends React.HTMLAttributes<HTMLDivElement> {
  items: CardInterface[],
  link?: {
    src: string,
    text: string,
  }
}

const Carousel: FC<carouselProps> = ({ items, link, className }) => {
  const [currentIndex, setIndex] = useState(0);
  const [itemWidth, updateItemWidth] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  // Each item should takes up an even amount of the total scroll width
  // we can divide the current scroll width by the number of items to calculate
  // an individual item's width
  useEffect(() => {
    const handleResize = () => {
      let trackWidth = trackRef.current?.scrollWidth ?? 0;
      updateItemWidth(trackWidth / items.length);
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }

  }, [items])

  const next = () => {
    setIndex((prev) => {
      return (prev + 1) % items.length;
    })
  }

  const previous = () => {
    setIndex((prev) => {
      let index = prev - 1;
      return index < 0 ? items.length - 1 : index;
    })
  }

  return (
    <>
      <motion.div
        className={cn("h-full relative", className)}
        initial={{ x: 0 }}
        animate={{ x: itemWidth * -currentIndex }}
        transition={{ type: 'tween', duration: 0.5 }}
      >
        <div ref={trackRef} className={`h-full absolute w-fit flex track transition-all]`}>
          {items.map((item) => (
            <Card key={item.id} image={{ ...item.image, sizes: '(max-width: 640px) 90vw , 42vw' }} title={item.title} description={item.description} className={`h-full min-w-[200px] w-[90vw] sm:w-[42vw] me-4`} />
          ))}
        </div>
      </motion.div>

      <div className="flex items-center justify-between">
        {link && (
          <Link href={link.src} className="link">
            {link.text}
          </Link>
        )}
        <div className="flex-1 flex justify-end items-center gap-6">
          <button onClick={previous}>
            <IoChevronBack size={20} />
          </button>
          <button onClick={next}>
            <IoChevronForward size={20} />
          </button>
        </div>

      </div>
    </>
  )
}

export default Carousel