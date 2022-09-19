import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import MenuItemList from './components/MenuItemList';
import { createPortal } from 'react-dom';

console.log("Portal Code Unleashed", "React Initialization");

// Create new Html DOM element to house dynamic React DOM
let rules_editor_element = document.getElementsByTagName("app-rules")[0];
let editor_element = document.createElement("div");
rules_editor_element.prepend(editor_element);

// Create and render React DOM
let editor_root = ReactDOM.createRoot(editor_element);
editor_root.render(
  <React.StrictMode>
    <App />
    <MenuItemList />
  </React.StrictMode>
);

reportWebVitals();
