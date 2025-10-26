import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import './index.css';
import './i18n';

// Dark mode favicon detection
const updateFavicon = () => {
  const favicon = document.getElementById('favicon') as HTMLLinkElement;
  const faviconDark = document.getElementById('favicon-dark') as HTMLLinkElement;
  
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // Dark mode detected
    if (favicon) favicon.href = '/favicon2.png';
  } else {
    // Light mode detected
    if (favicon) favicon.href = '/favicon.png';
  }
};

// Set initial favicon
updateFavicon();

// Listen for dark mode changes
if (window.matchMedia) {
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateFavicon);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>
);
