import { useState, useEffect } from 'react'
import axios from 'axios'
import BlogListItem from '../components/BlogListItem'

const Blogs = () => {


  const [blogs, setBlogs] = useState([])

  const getBlogs = async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      console.log(res.data)
      setBlogs(res.data)
  }

  useEffect(() => {
      getBlogs()
  }, [] )

  return (
    <div className='blog-collection'>
        <h2>Blogs</h2>
      {
        blogs.map(blog => (
            <BlogListItem key={blog.id} blog={blog} />
            ))
      }      
    </div>
  )
}

export default Blogs