import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Bootstrap's CSS must be imported BEFORE our own css so we can override it
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
