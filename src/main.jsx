import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ToggleSidebarContextProvider from './context/ToggleSidebar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToggleSidebarContextProvider>
      <App />
    </ToggleSidebarContextProvider>
  </React.StrictMode>
)
