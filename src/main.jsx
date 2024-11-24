import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import App from './App.jsx'
import Home from './coponents/Home/Home.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <App />
  // </StrictMode>,
)
