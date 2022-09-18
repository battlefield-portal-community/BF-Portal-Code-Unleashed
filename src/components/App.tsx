import React, { FC } from 'react';
import Editor from "@monaco-editor/react";

interface AppProps {}

const App: FC<AppProps> = () => {

  console.log("Portal Code Unleash", "App Editor");

  let plugin = BF2042Portal.Plugins.getPlugin("bf-portal-code-unleash");

  if (!plugin) {
      BF2042Portal.Shared.logError("Failed to load Portal Code Unleash!");
  }

  return (
    <Editor/>
  );
  };

export default App;