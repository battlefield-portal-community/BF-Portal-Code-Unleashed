import React from 'react';
import logo from './logo.svg';
import './App.css';
import Editor from "@monaco-editor/react";
import * as BF2042Portal from './types/bf-portal-extensions';

function App() {
  let plugin = BF2042Portal.Plugins.getPlugin("bf-portal-js");

  if (!plugin) {
      BF2042Portal.Shared.logError("Failed to load Portal JS!");
  }

  return (
    <Editor/>
  );
}

export default App;
