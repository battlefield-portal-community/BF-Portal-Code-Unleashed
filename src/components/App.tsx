import React, { FC } from 'react';
import Editor from "@monaco-editor/react";
import { ScriptLanguage } from '../enums';
import MenuItemList from './MenuItemList';
import { useState } from 'react';

interface AppProps {

}

const App: FC<AppProps> = (props: AppProps) => {
  let plugin: BF2042Portal.Plugin;

  const [editor, setEditor] = useState(ScriptLanguage.JavaScript);
  const [code, setCode] = useState("");
  const [changed, setChanged] = useState(false);
  const [monaco, setMonaco] = useState(false);

  console.log("Portal Code Unleashed", "App Editor");

  plugin = BF2042Portal.Plugins.getPlugin("bf-portal-code-unleashed");

  if (!plugin) {
    BF2042Portal.Shared.logError("Failed to load Portal Code Unleashed!");
  }

  const codeToBlockly = (editor: ScriptLanguage, code: string): any => {
    return {};
  }

  const blocklyToCode = (editor: ScriptLanguage, code: any): string => {
    return "";
  }

  const editorChanged = (editor: ScriptLanguage): void => {
    if (changed) {
      // TODO - Ask if want apply/discar/cancel changes
    }

    setChanged(false);
    setEditor(editor);

    switch (editor) {
      case ScriptLanguage.JavaScript:
        setMonaco(true);
        setCode("// This is the code for JavaScript");
        break;
      case ScriptLanguage.Python:
        setMonaco(true);
        setCode("# This is the code for Phyton");
        break;
      case ScriptLanguage.Lua:
        setMonaco(true);
        setCode("-- This is the code for Lua");
        break;
      default:
        setMonaco(false);
        setCode("");
    }
  }

  return (
    <React.StrictMode>
      {monaco && <Editor theme='vs-dark' language={editor} value={code} />}
      <MenuItemList editor={editor} onEditorSelected={editorChanged} />
    </React.StrictMode>
  );
}

export default App;