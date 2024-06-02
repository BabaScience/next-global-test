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
    <div>
      {
        post ? (
          <div>
            <h1>{post.title}</h1>
            <p>{post.summary}</p>
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