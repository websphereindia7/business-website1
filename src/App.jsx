// src/App.jsx
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="bg-white text-gray-900 relative">
      <Navbar />
      <Home />
      <Footer />

      {/* Scroll-to-Top Button */}
      <ScrollToTop />
    </div>
  );
}

export default App;
