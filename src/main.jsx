import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import RoutingApp from './routing.jsx'
import UserContextProvider from './context/Authentication.jsx'
import ThemeContextProvider from './context/themeConex.jsx'


createRoot(document.getElementById('root')).render(
  <UserContextProvider>
    <ThemeContextProvider>

    <RoutingApp/>
    </ThemeContextProvider>
  </UserContextProvider>
)
