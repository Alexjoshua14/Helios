import { FC } from 'react'
import Link from 'next/link'

interface heroProps { }

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
        <div className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[700px] h-full bg-stone-900 flex items-center justify-center p-4 rounded">
          <div
            className={`aspect-square w-auto h-[70vh] max-h-[300px] sm:max-h-[400px] lg:max-h-[550px] max-w-full rounded relative
                      bg-gradient-to-tr from-teal-900 to-teal-500 opacity-90 backdrop-blur
                      `}
          />
        </div>
        <div className="text-sm grid grid-cols-2 gap-8">
          <p>
            {`See work: Journey through Linear Gradients`}
          </p>
          <p>
            {`Astronomer Weekly`}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero