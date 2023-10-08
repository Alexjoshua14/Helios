import Image from 'next/image'
import { FC } from 'react'
import { cn } from '@/lib/utils'

interface cardProps extends React.HTMLAttributes<HTMLDivElement> {
  image: {
    src: string,
    alt: string,
    sizes: string,
  },
  title: string,
  description?: string,
}

const Card: FC<cardProps> = ({ image, title, description, className }) => {
  return (
    <div className={cn("h-full grid grid-rows-[3fr_1fr] grid-cols-1 gap-4", className)} style={{ scrollSnapAlign: 'start' }} >
      <div className="h-full relative">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={image.sizes}
          className="object-contain object-left-top"
        />
      </div>
      <div className="leading-relaxed">
        <p className="font-medium">
          {title}
        </p>
        {!!description &&
          <p>
            {description}
          </p>
        }
      </div>
    </div>
  )
}

export default Card