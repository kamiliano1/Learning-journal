import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { WebContextProvider } from './useContex'
import './index.css'
import 'remixicon/fonts/remixicon.css'
import { BrowserRouter as Router } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WebContextProvider>
      <Router>
        <App />
      </Router>
    </WebContextProvider>
  </React.StrictMode>,
)
