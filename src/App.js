import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom'
import Home from './Views/Home'
import Create from './Views/Create'
import Blogs from './Views/Blogs'
import NotFound from './Views/NotFound';
import BlogDetails from './Views/BlogDetails';

const App = () => {


  return (
    <div>
      <Navbar />

      <div className="container">
        
          <Routes>
            <Route path='*' element={ <NotFound/>} />
            <Route path='/' element={ <Home />} />
            <Route path='/create' element={ <Create />} />
            <Route path='/overview' element={ <Blogs />} />
            <Route path='/blogs/:id' element={ <BlogDetails />} />
          </Routes>
      </div>
    </div>
  )
}

export default App