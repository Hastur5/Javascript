import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Usuarios from './components/Usuarios'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Usuarios/>
  </React.StrictMode>,
)
