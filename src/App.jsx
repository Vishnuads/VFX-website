import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Course from './pages/Course'
import ScrollTop from './pages/ScrollTop'
import Form from './pages/Form'

function App() {

  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Course/>}/>
           <Route path="/apply" element={ <Form/>}/>
        </Routes>
        <ScrollTop/>
      </BrowserRouter>

    </>
  )
}

export default App
