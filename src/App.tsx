import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Layout from './components/Layout.tsx';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
function App() {
 
  return (
    <>
     <Router>
      <Layout>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
      
        </Routes>
        </Layout>
      
    </Router>
    </>
  )
}

export default App
