import React from 'react'
import { allPosts } from "content-collections";

// components
import BlogCard from '@/components/BlogCard'

interface Resource {
  title: string
  description: string
  icon: string
  color: string
}

const resources = [
  {
    title: 'What Will You Do? If You Can 10x Yourself.',
    description: 'Learn how to 10x your productivity and achieve your goals faster than ever before.',
    icon: '/blog/image.webp',
    color: '#FFD700',
  },
  {
    title: '5 AI video editing tools',
    description: 'Discover the top AI-powered video editing tools that will help you create stunning videos in minutes.',
    icon: '/blog/image.webp',
    color: '#FFD700',
  },
  {
    title: 'Audio Editing',
    description: 'Create professional-sounding audio with our easy-to-follow guide.',
    icon: '/blog/image.webp',
    color: '#FFD700',
  },
]

const resources_: Resource[] = []

const ResourcesPage = () => {
  return (
    <div className='w-screen bg-white pb-12 flex flex-col items-center min-h-screen'>
      <div className={`
        flex flex-col items-center justify-center w-full
        pt-20 pb-20
        sm:pt-24 sm:pb-24 
        md:pt-24 md:pb-28
        lg:pt-24 lg:pb-32
      `}
      >
        <h1 className={`
          text-[#272629] font-bold text-center mb-5 
          text-3xl 
          sm:text-4xl 
          md:text-5xl 
          lg:text-6xl
        `}
        >
          Resources
        </h1>
        <p className={`
          text-[#272629] w-3/4 text-center text-md mb-10
          sm:text-sm sm:w-1/2 sm:max-w-sm
          md:text-sm md:w-3/5 md:max-w-md
          lg:text-sm lg:w-3/5 lg:max-w-lg
        `}
        >
          Guides on video editing with AI and more.
        </p>
      </div>
      <div className={`
        grid grid-cols-1 gap-5 w-full
        sm:grid-cols-2 sm:w-full
        md:grid-cols-2 md:w-full
        lg:grid-cols-3 lg:w-full lg:max-w-screen-lg
      `}
      >
        {allPosts.map(({title, summary, _meta}) => (
          <BlogCard
            key={title}
            title={title}
            description={summary}
            imageUrl='/blog/image.webp'
            link={`/blog/${_meta.path}`}
          />
        ))}
      </div>
      {
        allPosts.length === 0 && ( 
          <div className='w-full flex flex-col items-center justify-center'>
            <p className='text-muted-foreground text-lg'>No resources found</p>
          </div>
        )
      }
    </div>
  )
}

export default ResourcesPage