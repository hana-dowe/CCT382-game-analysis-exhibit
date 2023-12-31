import * as React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

import './index.css';

const rootElem = document.getElementById('root');
if (rootElem) {
  const root = createRoot(rootElem);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
