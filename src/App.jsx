// src/App.jsx
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
