import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Artworks from './pages/Artworks'
import GalleryPage from './pages/GalleryPage'
import Upload from './pages/Upload'
import Profile from './pages/Profile'

export default function App(){
  return (
    <BrowserRouter>
      <div className="app">
        <header className="site-header">
          <div className="brand">
            <h1>Artist Portfolio</h1>
            <p>Selected artworks — images, drawings, digital art</p>
          </div>
          <nav className="main-nav">
            <Link to="/">Home</Link>
            <Link to="/artworks">Artworks</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/upload">Upload</Link>
            <Link to="/profile">Profile</Link>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/artworks" element={<Artworks/>} />
            <Route path="/gallery" element={<GalleryPage/>} />
            <Route path="/upload" element={<Upload/>} />
            <Route path="/profile" element={<Profile/>} />
          </Routes>
        </main>

        <footer className="site-footer">Built with a Git-based CMS (Netlify CMS)</footer>
      </div>
    </BrowserRouter>
  )
}
