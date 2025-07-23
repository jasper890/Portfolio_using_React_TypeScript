import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react"
import './App.css'
import Layout from './components/Layout.tsx';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Projects from './pages/Projects.tsx';
import Contact from './pages/Contact.tsx';
import ScrollToTop from './pages/ScrollToTop.tsx';
function App() {
 
  return (
    <>
   
      <Router>
      <ScrollToTop /> 
      <Layout>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />

        </Routes>
        </Layout>
       <Analytics />
    </Router>
    </>
  )
}

export default App
