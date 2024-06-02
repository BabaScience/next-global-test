import React from 'react'
import { allPosts } from "content-collections";

interface BlogPageProps {
  params: {
    slug: string
  }
}


const BlogPage = ({ params } : BlogPageProps) => {
  const post = allPosts.find((post) => post._meta.path === params.slug)
  return (
    <div className='w-screen bg-white pb-12 flex flex-col items-center min-h-screen'>
      {
        post ? (
          <div>
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
                {post.title}
              </h1>
              <p className={`
                text-[#272629] w-3/4 text-center text-md mb-10
                sm:text-sm sm:w-1/2 sm:max-w-sm
                md:text-sm md:w-3/5 md:max-w-md
                lg:text-sm lg:w-3/5 lg:max-w-lg
              `}
              >
                {post.summary}
              </p>
            </div>
          </div>
        ) : (
          <div>
            <h1>Post not found</h1>
          </div>
        )
      }
    </div>
  )
}

export default BlogPage