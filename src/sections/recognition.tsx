
import { FC } from 'react'
import Link from 'next/link'

import { recognizers } from '@/data/recognition'

interface recognitionProps { }

const Recognition: FC<recognitionProps> = ({ }) => {
  return (
    <section className="w-full flex flex-col gap-8 section section-content">
      <h2 className="section-header">
        Recognition
      </h2>
      <div className="flex flex-col lg:flex-row gap-8">
        {recognizers.map(rec => (
          <Link key={rec.id} href={rec.link} >
            <div className="flex flex-col gap-2">
              <rec.icon size={rec.iconSize} />
              <p>
                {rec.text}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <Link href="/" className="link">
        All Articles
      </Link>
    </section>
  )
}

export default Recognition