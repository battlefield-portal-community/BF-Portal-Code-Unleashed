import React, { FC, PropsWithChildren } from 'react';
import MenuItem from './MenuItem';
import { ScriptLanguage } from '../enums';
import ReactDOM from 'react-dom';

interface MenuItemListProps extends PropsWithChildren {
  editor: ScriptLanguage,
  onEditorSelected: (language: ScriptLanguage) => void
}

const MenuItemList: FC<MenuItemListProps> = (props: MenuItemListProps) => {
  let menu_tree_element = document.getElementsByClassName("editor-menu-tree")[0] as HTMLElement;

  const newMenuItem = (label: string, language: ScriptLanguage) => (
    <MenuItem active={props.editor === language} onSelected={() => props.onEditorSelected(language)} >{label}</MenuItem>
  );

  return ReactDOM.createPortal(
    <React.Fragment>
      {props.children}
      {newMenuItem("Blockly Editor", ScriptLanguage.Blockly)}
      {newMenuItem("JavaScript Editor", ScriptLanguage.JavaScript)}
      {newMenuItem("Python Editor", ScriptLanguage.Python)}
      {newMenuItem("Lua Editor", ScriptLanguage.Lua)}
    </React.Fragment>,
    menu_tree_element)
}

export default MenuItemList;
