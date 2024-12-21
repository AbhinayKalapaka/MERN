import React from 'react';
import { useAuth } from './contexts/AuthContext';
import LoginPage from './pages/LoginPage';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function AppContent() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <LoginPage />;
  }

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}

export default AppContent;