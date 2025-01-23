import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Reel from '/src/components/Reel.jsx'
import ItemListContainer from '/src/components/ItemListContainer.jsx';
import ItemDetailContainer from '/src/components/ItemDetailContainer.jsx';
import Navbar from '/src/components/Navbar.jsx';
import Contact from '/src/components/Contact.jsx'
import Footer from '/src/components/Footer.jsx'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Reel />} />
        <Route path="/ItemListContainer" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;