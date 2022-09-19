import React, { FC, PropsWithChildren } from 'react';
import MenuItem from './MenuItem';
import { ScriptLanguage } from '../enums';
import ReactDOM from 'react-dom';

const MenuItemList: FC<PropsWithChildren> = (prop) => {
  let menu_tree_element = document.getElementsByClassName("editor-menu-tree")[0] as HTMLElement;
  return ReactDOM.createPortal(
    <React.Fragment>
      {prop.children}
      <MenuItem label="Blockly Editor" language={ScriptLanguage.Blockly} />
      <MenuItem label="JavaScript Editor" language={ScriptLanguage.JavaScript} />
      <MenuItem label="Python Editor" language={ScriptLanguage.Python} />
      <MenuItem label="Lua Editor" language={ScriptLanguage.Lua} />
    </React.Fragment>,
    menu_tree_element)
};

export default MenuItemList;
