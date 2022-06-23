import { useEffect, useState} from 'react'
import axios from'axios'
import { async } from 'jshint/src/prod-params'
import { useParams } from 'react-router-dom'

const BlogDetails = () => {

const { id } = useParams()
const [blog, setBlog] = useState(null)
const [loading, setLoading] = useState(false)

const getBlog = async () => {
    setLoading(true)
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id )
    setBlog(res.data)
    setLoading(false)
}

useEffect(() => {
  getBlog()  
}, [])


  return (
    <div>
        {loading && <p>Loading...</p>}
        { blog &&
            <div className='blog-details'>
                <div className="blog-title">{blog.title}</div>
                <div className="blog-desc">{blog.body}</div>
            </div>
        }
    
    </div>
  )
}

export default BlogDetails