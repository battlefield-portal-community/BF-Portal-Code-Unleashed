import React from 'react';
import Editor from "@monaco-editor/react";

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
