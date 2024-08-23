import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'
import { ThemeProvider } from './contexts/ThemeContext.jsx';

import { BrowserRouter } from 'react-router-dom'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter >
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
