import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CourseListing from './pages/CourseListing'
import CourseDetail from './pages/CourseDetail'
import Booking from './pages/Booking'
import Categories from './pages/Categories'
import About from './pages/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<CourseListing />} />
          <Route path="/courses/:id" element={<CourseDetail />} />
          <Route path="/booking/:id" element={<Booking />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App