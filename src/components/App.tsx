import React, { FC } from 'react';
import Editor from "@monaco-editor/react";
import ReactDOM from 'react-dom';

const App: FC = () => {

  console.log("Portal Code Unleashed", "App Editor");

  let plugin = BF2042Portal.Plugins.getPlugin("bf-portal-code-unleashed");

  if (!plugin) {
    BF2042Portal.Shared.logError("Failed to load Portal Code Unleashed!");
  }

  return (<Editor />);
};

export default App;