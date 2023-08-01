import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const mount = (el: HTMLElement):void => {
    const root = createRoot(el);
    root.render(<App />);
}
const container:HTMLElement|null = document.getElementById('root');

if (container) {
    mount(container);
}

export { mount };