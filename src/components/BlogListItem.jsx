import React from 'react'
import { Link } from 'react-router-dom'

const BlogListItem = ({blog}) => {
  return (
    <Link to={`/blogs/${blog.id}`} className='blog-item'>
        <h2>{blog.title}</h2>
        <p>{blog.body}</p>
    </Link>
  )
}

export default BlogListItem