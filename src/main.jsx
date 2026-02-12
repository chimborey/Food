import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';  // <-- import Tailwind CSS
import ShopContextProvider from './Components/ShopContext';
import 'aos/dist/aos.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>

  <ShopContextProvider>
    <App />
  </ShopContextProvider>

  // </React.StrictMode>
);