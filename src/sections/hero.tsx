import Link from 'next/link'
import { FC } from 'react'

interface heroProps {

}

const Hero: FC<heroProps> = ({ }) => {
  return (
    <section className="h-[34rem] w-full fourths-grid">
      <div className="flex flex-col gap-10 py-14">
        <h1 className="text-5xl font-medium">
          Design Studio
        </h1>
        <p className="text-xl pe-4">
          Helios: crafting tailored residential designs and elevating the science of existing
        </p>
        <Link href="/" className="link">
          All Work
        </Link>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-auto h-2/3 max-w-full max-h-full aspect-square bg-pink-700 bg-opacity-30 backdrop-blur border-[1px] border-stone-100 shadow rounded" />
        <div className="text-sm grid grid-cols-2 gap-8">
          <p>
            See work: Journey through Ripples
          </p>
          <p>
            Some description can go right here
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero