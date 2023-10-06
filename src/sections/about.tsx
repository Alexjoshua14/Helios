import Link from 'next/link'
import { FC } from 'react'

interface aboutProps {

}

const About: FC<aboutProps> = ({ }) => {
  return (
    <section className="h-full w-full section-content section grid sm:grid-cols-2 gap-10">
      <div className="w-full sm:w-1/2 flex flex-col gap-10 sm:col-span-2">
        <h2 className="section-header">
          About
        </h2>
        <p className="section-description">
          Helios is an imagined design company situated in San Francisco, specializing in the subtle evolution of architectural excellence otherworldly elegance.
        </p>
        <Link href="/" className="link">
          Learn More
        </Link>
      </div>

      <div className="flex flex-col gap-6">
        <p className="text-5xl font-medium">
          {`270`}
        </p>
        <p>
          {`Over 270 extraterrestials call Helios-designed starships their own`}
        </p>
      </div>
      <div className="flex flex-col gap-6">
        <p className="text-5xl font-medium">
          {`20`}
        </p>
        <p>
          {`More than 20 years' collective experience`}
        </p>
      </div>
      <div className="flex flex-col gap-6">
        <p className="text-5xl font-medium">
          45
        </p>
        <p>
          {`Over 45 starships designed from completely recycled materials: no limited resources sacrificed for "new"`}
        </p>
      </div>
      <div className="flex flex-col gap-6">
        <p className="text-5xl font-medium">
          {`65`}
        </p>
        <p>
          {`Over 65 influencer features`}
        </p>

      </div>
    </section>
  )
}

export default About