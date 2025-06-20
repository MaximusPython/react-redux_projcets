import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './components/About'
import NotFound from './components/NotFound'
import Contacts from './components/Contacts'
import MainLayout from './layouts/MainLayout'
import Home from './components/Home'
import Courses from './components/Courses'
import SingleCourse from './components/SingleCourse'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="about" element={<About />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="courses" element={<Courses />} />
            <Route path="courses/:slug" element={<SingleCourse />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
