import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

// let extensions_menu_item = document.createElement("<div id=\"bf-portal-js\">") as HTMLElement;
// extensions_menu_item.className = "cdk-tree-node mat-tree-node";
// extensions_menu_item.setAttribute("role", "treeitem");
// extensions_menu_item.ariaLevel = "2";

// let rules_menu_item = document.getElementsByClassName("mat-tree-node top")[3] as HTMLElement;
// rules_menu_item.after(extensions_menu_item);

// const root = ReactDOM.createRoot(extensions_menu_item);

const editor = document.createElement("div");
document.body.append(editor)
const root = ReactDOM.createRoot(editor);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
