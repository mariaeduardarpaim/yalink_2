import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppStandalone from './AppStandalone'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppStandalone />
  </StrictMode>,
)