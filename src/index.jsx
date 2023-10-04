import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import './Styles/index.scss'
import { BrowserRouter } from 'react-router-dom'
import AppContext from './Components/AppContext/AppContext.jsx'










ReactDOM.createRoot(document.getElementById('root')).render(


  <AppContext>

    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>

  </AppContext>












)
