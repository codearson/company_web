import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

export default {
  build: {
    rollupOptions: {
      external: ["/src/main.tsx"]
    }
  }
}

createRoot(document.getElementById("root")!).render(<App />);
