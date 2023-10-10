import Carousel from '@/components/carousel'
import { CardInterface } from '@/types/card'
import { FC } from 'react'

interface recentlyProps {

}

const recentWorkContent: CardInterface[] = [
  {
    id: 'woidnawd98d21heu',
    image: {
      alt: "An interior view of the uninvented galactic rover",
      src: "https://images.unsplash.com/flagged/photo-1595524288414-a7fda0a12d0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1012&q=80"
    },
    title: 'October 9, 2023',
  },
  {
    id: 'woidnawd98d21heu',
    image: {
      alt: "Not our ship zooming off",
      src: "https://images.unsplash.com/photo-1639262498805-17c7dc422d37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNwYWNlc2hpcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    title: 'October 2, 2023',
  },
  {
    id: 'woidnawd98d21heu',
    image: {
      alt: "ALTTEXTHERE",
      src: "https://images.unsplash.com/photo-1639262498805-17c7dc422d37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNwYWNlc2hpcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    title: 'September 30, 2023',
  },
  {
    id: 'woidnawd98d21heu',
    image: {
      alt: "ALTTEXTHERE",
      src: "https://images.unsplash.com/photo-1639262498805-17c7dc422d37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNwYWNlc2hpcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    title: 'September 19, 2023',
  },
]

const Recently: FC<recentlyProps> = ({ }) => {
  return (
    <section className="h-full w-full section-content section grid sm:grid-cols-2 gap-10">
      <div className="w-full sm:w-1/2 flex flex-col gap-10 sm:col-span-2">
        <h2 className="section-header">
          Recently
        </h2>
        <p>
          A gaze into the amazing work we are imagining right this picosecond,
          project development, solar system relations and things
          that inspire our craft. That is .. if we were a real company...
        </p>
      </div>
      <div className="h-[50vh]">
        <Carousel items={recentWorkContent} />
      </div>
    </section>
  )
}

export default Recently