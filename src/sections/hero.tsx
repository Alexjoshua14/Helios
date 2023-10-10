import Link from 'next/link'
import { FC } from 'react'

interface heroProps {

}

const Hero: FC<heroProps> = ({ }) => {
  return (
    <section className="h-full w-full flex flex-col sm:grid sm:grid-cols-[1fr_3fr] sm:items-center section">
      <div className="flex flex-col gap-10 section-content max-w-[350px]">
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
      <div className="flex flex-col items-center w-full gap-6">
        <div className="aspect-square w-auto h-[40vw] max-h-[70vh] max-w-full bg-gradient-to-tr from-pink-800 to-pink-600 opacity-70 bg-opacity-40 backdrop-blur border-[1px] border-stone-100 shadow rounded" />
        <div className="text-sm grid grid-cols-2 gap-8">
          <p>
            {`See work: Journey through Ripples`}
          </p>
          <p>
            {`Some description can go right here`}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero