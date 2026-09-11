import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import CareerMentoring from './pages/CareerMentoring';
import Consulting from './pages/Consulting';
import WebTech from './pages/WebTech';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <Router basename="/Sunil_Shirvaiker">
      <ScrollToTop />
      <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
        <Navbar />
        <main style={{flex: 1}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/career-mentoring" element={<CareerMentoring />} />
            <Route path="/consulting" element={<Consulting />} />
            <Route path="/web-tech" element={<WebTech />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
