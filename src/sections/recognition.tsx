import Link from 'next/link'
import { FC } from 'react'
import { RiSpaceShipLine } from 'react-icons/ri'
import { GiSpaceNeedle, GiSpaceSuit } from 'react-icons/gi'

interface recognitionProps {

}

const recognizers = [
  {
    id: `126378`,
    icon: RiSpaceShipLine,
    iconSize: 40,
    text: `Nebula Radiocast: Space-time defying ships`,
    link: `/`,
  },
  {
    id: `1232898`,
    icon: GiSpaceNeedle,
    iconSize: 40,
    text: `Intestellar Relays: Exquisite execution on warp engines`,
    link: `/`,
  },
  {
    id: `19808321`,
    icon: GiSpaceSuit,
    iconSize: 40,
    text: `Journeymen of Space: "We couldn't believe our eyes when we first saw.."`,
    link: `/`,
  },
  {
    id: `098328`,
    icon: RiSpaceShipLine,
    iconSize: 40,
    text: `Nebula Radiocast: Space-time defying ships`,
    link: `/`,
  },
  {
    id: `098328`,
    icon: RiSpaceShipLine,
    iconSize: 40,
    text: `Nebula Radiocast: Space-time defying ships`,
    link: `/`,
  },
]

const Recognition: FC<recognitionProps> = ({ }) => {
  return (
    <section className="w-full flex flex-col gap-8 section section-content">
      <h2 className="section-header">
        Recognition
      </h2>
      <div className="flex flex-col gap-8">
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