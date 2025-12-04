import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Course from './pages/Course'
import ScrollTop from './pages/ScrollTop'

function App() {

  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Course/>}/>
        </Routes>
        <ScrollTop/>
      </BrowserRouter>

    </>
  )
}

export default App
