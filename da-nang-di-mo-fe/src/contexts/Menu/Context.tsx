import React, { createContext, useContext, useState } from "react";
import { IMenuContext, IMenuItem } from "./interface";

const context = createContext<IMenuContext>({} as any);
export function MenuContext(props: React.PropsWithChildren) {
 const [menuItems, _setMenuItems] = useState<IMenuItem[]>([]);
 const addMenuItem = (val: IMenuItem | IMenuItem[]) => {
  let items: IMenuItem[] = [...menuItems];
  if (Array.isArray(val)) {
   items = val;
  } else {
   items.push(val);
  }
  _setMenuItems(items);
 };

 const setMenuItems = (val: IMenuItem[]) => {
  _setMenuItems(val);
 };
 const clear = () => {
  _setMenuItems([]);
 };
 return (
  <context.Provider
   value={{
    addMenuItem,
    menuItems,
    setMenuItems,
    clear,
   }}
  >
   {props.children}
  </context.Provider>
 );
}

export function useMenuContext() {
 return useContext(context);
}
