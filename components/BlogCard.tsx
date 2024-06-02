import React from 'react'

// shadcn components
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


interface ResourceCardProps {
  title: string
  description: string,
  imageUrl: string,
  link: string
}



const ResourceCard = ({ title, description, imageUrl, link }: ResourceCardProps) => {
  return (
    <a href={link}>
      <Card className={`
      rounded-none border-none shadow-none
      hover:shadow-lg
      `}
      >
        <CardHeader
        >
          <div className={`
            overflow-hidden
          `}
          >
            <img 
              src={imageUrl} 
              alt={title} 
              className={`
                w-full h-48 object-cover 
                hover:scale-125 animate-slow
              `} 
            />
          </div>
        </CardHeader>
        <CardHeader>
          <CardTitle
            className={`
            text-[#272629] font-regular text-start mb-5 
            text-xl 
            sm:text-2xl 
            md:text-2xl 
            lg:text-2xl
            `}
          >
            {title}
          </CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
      </Card>
    </a>
  )
}

export default ResourceCard