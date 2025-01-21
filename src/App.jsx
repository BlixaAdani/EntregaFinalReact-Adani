import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from '/src/components/NavBar.jsx';
import Home from '/src/components/Home.jsx';
import Categories from '/src/components/Categories.jsx';
import Footer from '/src/components/Footer.jsx'

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;