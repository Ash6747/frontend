import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import './assets/css/style.css'
import App from './App.jsx';
// import TagManager from 'react-gtm-module';

// const tagManagerArgs = {
//   gtmId: 'GTM-NBDZ9VQZ'
// };
// TagManager.initialize(tagManagerArgs);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
