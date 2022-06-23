import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {

    const navigate = useNavigate()

    const handleClick = () => { 
        navigate("/")
    }   

      return (
        <div>
          <h2>404 Not Found</h2>
          <button onClick={handleClick}>Home</button>
        </div>
      )
}

export default NotFound