'use client'

import { FC } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { InfoCard } from '@/components/infoCard'
import { aboutContent } from '@/data/about'
interface aboutProps {

}

const About: FC<aboutProps> = ({ }) => {
  return (
    <section className="h-full w-full section-content section flex flex-col lg:flex-row lg:justify-between gap-10">
      <div className="w-full max-w-[420px] flex flex-col gap-10 sm:col-span-2">
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
      <div className="grid sm:grid-cols-2 gap-14 lg:w-1/2">
        {aboutContent.map((item, index) => (
          <motion.div
            key={item.id}
            className="flex flex-col gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1, ease: 'easeIn' }}

          >
            <InfoCard header={item.header} caption={item.caption} delay={index * 0.1} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default About