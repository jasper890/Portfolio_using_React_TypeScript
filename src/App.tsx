import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react"
import './App.css'
import Layout from './components/Layout.tsx';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Projects from './pages/Projects.tsx';
function App() {
 
  return (
    <>
    <Analytics />
     <Router>
      <Layout>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
        </Routes>
        </Layout>
      
    </Router>
    </>
  )
}

export default App
