// import { useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import { Routes, Route } from "react-router-dom"
import Navbar from './components/navbar'
import Home from './pages/Home'
import About from './pages/About'
import Latest from "./pages/Latest"
import Article from "./pages/Article"
function App() {

  return (
    <div>
      <Navbar />
      <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route  path="/about" element={<About />}/>
          <Route  path="/mainArticle" element={<Latest />}/>
          <Route path="/article/:articleId" element={<Article />} />
      </Routes>
    </div>
  )
}

export default App