import { FC } from 'react'

import Carousel from '@/components/carousel'
import { recentWorkContent } from '@/data/recently'

interface recentlyProps { }

const Recently: FC<recentlyProps> = ({ }) => {
  return (
    <section className="h-full w-full section-content section flex flex-col lg:flex-row gap-10">
      <div className="w-full sm:w-1/2 flex flex-col gap-10">
        <h2 className="section-header">
          Recently
        </h2>
        <p>
          A gaze into the amazing work we are imagining right this picosecond,
          project development, solar system relations and things
          that inspire our craft. That is .. if we were a real company...
        </p>
      </div>
      <div className="h-[50vh] lg:w-full">
        <Carousel items={recentWorkContent} />
      </div>
    </section>
  )
}

export default Recently