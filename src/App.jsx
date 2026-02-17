import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Sell from './pages/Sell'
import Agents from './pages/Agents'
import AgentDetail from './pages/AgentDetail'
import Blogs from './pages/Blogs'
import BlogDetail from './pages/BlogDetail'
import About from './pages/About'
import SearchPage from './pages/Listing'
import LoginPage from './pages/Login'
import RegisterPage from './pages/Register'

const App = () => {
  return (
    <Router>

      <Routes>
        <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/agents/:id" element={<AgentDetail />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/listing" element={<SearchPage />} />
      </Routes>
    </Router>
  )
}

export default App
