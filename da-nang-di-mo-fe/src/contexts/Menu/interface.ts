import React from "react";

export interface IMenuItem {
 title: string;
 childrens?: IMenuItem[];
 icon?: string | React.ReactElement;
 url?: string;
}
export interface IMenuContext {
 menuItems: IMenuItem[];
 setMenuItems: (val: IMenuItem[]) => void;
 addMenuItem: (val: IMenuItem[] | IMenuItem) => void;
 clear: () => void;
}
