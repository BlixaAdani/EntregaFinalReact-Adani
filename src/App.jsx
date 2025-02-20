import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/AuthProvider';
import ProtectedRoute from './components/ProtectedRoute';
import AdminDashboard from "./components/AdminDashboard.jsx";
import UserDashboard from "./components/UserDashboard.jsx";
import NotAuthorized from "./components/NotAuthorized.jsx";
import Login from "./components/Login.jsx";
import Navbar from './components/Navbar';
import Reel from './components/Reel';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import { CartProvider } from "./components/CartContext.jsx";
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/not-authorized" element={<NotAuthorized />} />
            
            <Route 
              path="/admin" 
              element={<ProtectedRoute element={<AdminDashboard />} allowedRoles={['admin']} />} 
            />
            <Route 
              path="/user" 
              element={<ProtectedRoute element={<UserDashboard />} allowedRoles={['user', 'admin']} />} 
            />

            <Route path="/" element={<Reel />} />
            <Route path="/item-list-container" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;