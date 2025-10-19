import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home.tsx'
import { About } from './pages/About/index.tsx'
import { Work } from './pages/Work.tsx'
import { Contact } from './pages/Contact.tsx'
import { DefaultLayout } from './layouts/DefaultLayout/index.tsx'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}
