import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import AppContent from './AppContent';
import './styles/global.css';

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;