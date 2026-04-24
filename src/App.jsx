import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Administration from './pages/Administration';
import Academics from './pages/Academics';
import Admission from './pages/Admission';
import Research from './pages/Research';
import CampusLife from './pages/CampusLife';
import NewsEvents from './pages/NewsEvents';
import Contact from './pages/Contact';
import './styles/global.css';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main style={{ paddingTop: 'var(--nav-height)' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/administration" element={<Administration />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/research" element={<Research />} />
          <Route path="/campus-life" element={<CampusLife />} />
          <Route path="/news-events" element={<NewsEvents />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
