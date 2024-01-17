import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import GlobalProvider from './context/GlobalProvider.jsx'
import BebidasProvider from './context/BebidasProvider.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalProvider>
      <BebidasProvider>
        <App />
      </BebidasProvider>
    </GlobalProvider>
  </React.StrictMode>,
)
