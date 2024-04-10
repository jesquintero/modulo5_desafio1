import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { Container } from 'react-bootstrap';

import App from './App.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Container fluid className="p-0 vh-100 justify-content-center align-items-center">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Container>
  </React.StrictMode>
)
