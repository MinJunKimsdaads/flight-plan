import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { MapProvider } from './contexts/MapContext.tsx'

createRoot(document.getElementById('root')!).render(
  <MapProvider>
    <App />
  </MapProvider>
)
