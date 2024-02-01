import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import App from './clientSide/App'
import './clientSide/index.css'

import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <App />

  </BrowserRouter>
)

