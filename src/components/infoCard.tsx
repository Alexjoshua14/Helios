'use client'

import { FC } from 'react'
import { motion } from 'framer-motion'

interface infoCardProps {
  header: String,
  caption: String,
  delay: number,
}

export const InfoCard: FC<infoCardProps> = ({ header, caption, delay }) => {
  // Animate header characters individually y 10 -> 0, opacity: 0 -> 1, stagger: 0.05s

  return (
    <div>
      <div className="flex">
        {header.split("").map((c, index) => (
          <motion.p
            className="text-5xl font-medium"
            key={`${header}-${c}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: delay + .75 + (index * 0.1), ease: "circOut", duration: 0.35 }}
          >
            {c}
          </motion.p>
        ))}
      </div>
      <p>
        {caption}
      </p>
    </div>
  )
}