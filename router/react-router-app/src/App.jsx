import { useState } from 'react'
import Home from './components/Home'
import Products from './components/Products'
import About from './components/About'
import NotFound from './components/NotFound'
import './App.css'
import { Link, Route, Routes } from 'react-router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ul className="flex gap-4 p-5">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/products/Apples" element={<h1>Apples Components</h1>} />
        <Route path="/products/Bananas" element={<h1>Bananas Components</h1>} />
        <Route path="/products/Oranges" element={<h1>Oranges Components</h1>} />
        <Route path="/products/Pineapples" element={<h1>Pineapples Components</h1>} />
      </Routes>
    </>
  )
}

export default App
