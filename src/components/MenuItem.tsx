import React, { FC } from 'react';
import { ScriptLanguage } from '../enums';


interface MenuItemProps {
  label: string,
  language: ScriptLanguage
}

const MenuItem: FC<MenuItemProps> = (prop) => {

  console.log("Portal Code Unleashed", "Menu Item " + prop.label);

  return (
    <div className="cdk-tree-node mat-tree-node">
      <a className="body" href="#/">
        <div>{prop.label}</div>
      </a>
      <div className="progress">
        <div className="line"></div>
        <div className="dot">
          <div className="strike"></div>
        </div>
      </div>
    </div>
  )
};

export default MenuItem;
