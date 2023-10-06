import { FC } from 'react'

interface heroProps {

}

const Hero: FC<heroProps> = ({ }) => {
  return (
    <section className="h-20 w-full border-2 border-teal-700">
      <h1>
        Hero
      </h1>
    </section>
  )
}

export default Hero