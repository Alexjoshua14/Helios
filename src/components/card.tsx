import Image from 'next/image'
import { FC } from 'react'
import { cn } from '@/lib/utils'

interface cardProps extends React.HTMLAttributes<HTMLDivElement> {
  image: string,
  title: string,
  description?: string,
}

const Card: FC<cardProps> = ({ image, title, description, className }) => {
  return (
    <div className={cn("h-full grid grid-rows-[3fr_1fr] grid-cols-1 gap-4", className)}>
      <div className="h-full relative">
        <Image
          src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"
          alt="space image"
          fill
          className="object-contain"
        />
      </div>
      <div className=" leading-relaxed">
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