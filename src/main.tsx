// Ensure window.fetch has both getter and setter in iframe environments
if (typeof window !== 'undefined') {
  try {
    let _fetch = window.fetch;
    Object.defineProperty(window, 'fetch', {
      get: () => _fetch,
      set: (fn) => {
        _fetch = fn;
      },
      configurable: true,
      enumerable: true,
    });
  } catch (_) {
    // Already defined or protected
  }
}

import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(<App />);
