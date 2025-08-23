import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ContactIndex from './Components/ContactPages/ContactIndex.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContactIndex/>
  </StrictMode>,
)
