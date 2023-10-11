
import { FC } from 'react'

import Carousel from '@/components/carousel'
import { workContent } from '@/data/work'

interface workProps { }

const Work: FC<workProps> = ({ }) => {

  return (
    <section className="w-full max-w-screen section section-content flex flex-col gap-8">
      <h2 className="section-header">
        Work
      </h2>
      <div className="h-[40vh] lg:h-[50vh]">
        <Carousel items={workContent} link={{ src: '/', text: 'All Work' }} />
      </div>
    </section>
  )
}

export default Work