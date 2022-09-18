import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import MenuItemList from './components/MenuItemList';
import { createPortal } from 'react-dom';

console.log("Portal Code Unleash", "React Initialization");

// Create new Html DOM element to house dynamic React DOM
let editor_element = document.createElement("div");
document.body.append(editor_element)

// Create and render React DOM
let editor_root = ReactDOM.createRoot(editor_element);
editor_root.render(
  <React.StrictMode>
    <App />
    <MenuItemList/>
  </React.StrictMode>
); 

reportWebVitals();
