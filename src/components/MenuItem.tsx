import React, { FC, PropsWithChildren } from 'react';


interface MenuItemProps extends PropsWithChildren {
  active: boolean,
  onSelected: () => void
}

const MenuItem: FC<MenuItemProps> = (props: MenuItemProps) => {
  console.log("Portal Code Unleashed", "Menu Item " + props.children);

  return (
    <div className="cdk-tree-node mat-tree-node">
      <a className="body" onClick={props.onSelected}>
        <div>{props.children}</div>
      </a>
      <div className="progress">
        <div className="line"></div>
        <div className="dot">
          <div className="strike"></div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
