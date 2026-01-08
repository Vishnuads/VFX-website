import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Course from './pages/Course'
import ScrollTop from './pages/ScrollTop'
import Form from './pages/Form'
import Global from './pages/Global'

function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Course />} />
          <Route path="/apply" element={<Form />} />
          <Route path="/global" element={<Global />}/>
        </Routes>
        <ScrollTop />
      </BrowserRouter>

    </>
  )
}

export default App
