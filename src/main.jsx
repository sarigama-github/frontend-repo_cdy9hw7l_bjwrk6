import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Test from './Test'
import './index.css'
import ServicesPage from './pages/ServicesPage'
import TeamPage from './pages/TeamPage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)