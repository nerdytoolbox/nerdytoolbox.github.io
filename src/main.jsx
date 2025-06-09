import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import NerdyToolbox from './NerdyToolbox.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NerdyToolbox />
  </StrictMode>,
)
