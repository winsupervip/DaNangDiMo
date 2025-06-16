import React from "react";
import {AlertContext} from "../contexts/Alert/AlertContext";
import {MenuContext} from "../contexts/Menu/Context";
import UserProvider from "../contexts/useContexts";
export function Providers(props: React.PropsWithChildren) {
  return (
    <AlertContext>
      <MenuContext>
        <UserProvider>{props.children}</UserProvider>
      </MenuContext>
    </AlertContext>
  );
}
