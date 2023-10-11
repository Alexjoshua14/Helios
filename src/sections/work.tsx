
import { FC } from 'react'
import dynamic from 'next/dynamic'

import { workContent } from '@/data/work'

const Carousel = dynamic(() => import('@/components/carousel'), {
  ssr: false
})

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