import React from 'react';
import Router from './routes';
import './App.css';
import ShopProvider from './contexts/Shop';

function App() {
  
  return (
      <ShopProvider>
           <Router/>
      </ShopProvider>
  );
  

}

export default App;
