import { createRoot } from 'react-dom/client';
import { App } from './App.mjs';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
