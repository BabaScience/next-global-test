import React from 'react'
import { allPosts } from "content-collections";


const Posts = () => {
  return (
    <div className=''>
      All Posts
      <ul>
        {
          allPosts.map((post) => (
            <li key={post._meta.path}>
              <a href={`/blog/${post._meta.path}`}>
                <h3>{post.title}</h3>
                <p>{post.summary}</p>
                {/* {
                  post.read ? (
                    <span>Read</span>
                  ) : (
                    <span>Unread</span>
                  )
                } */}
              </a>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Posts