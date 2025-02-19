import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Reel from './components/Reel';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA0Sf88vsTZx6kcJLPOV4hTevu5mPn-pcE",
  authDomain: "raviolandia-bb645.firebaseapp.com",
  projectId: "raviolandia-bb645",
  storageBucket: "raviolandia-bb645.firebasestorage.app",
  messagingSenderId: "717057749513",
  appId: "1:717057749513:web:43f21f1751316e8984bed8",
  measurementId: "G-VVBY18FSLM"
};

const App = initializeApp(firebaseConfig);
const analytics = getAnalytics(App);

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Reel />} />
        <Route path="/item-list-container" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;