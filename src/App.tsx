import { Route, Routes } from 'react-router-dom'
import { ScrollToTop } from './components/ScrollToTop'
import { Landing } from './pages/Landing'
import { Terms } from './pages/Terms'
import { Privacy } from './pages/Privacy'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/termos' element={<Terms />} />
        <Route path='/privacidade' element={<Privacy />} />
      </Routes>
    </>
  )
}

export default App
