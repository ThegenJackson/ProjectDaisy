import React from 'react'
import ReactDOM from 'react-dom/client'

import "./index.css";

import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import App from './components/App'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <Footer />
  </React.StrictMode>,
)
