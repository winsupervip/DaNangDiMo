import { Modal } from "antd";
import { createContext, useContext, useEffect, useState } from "react";
import { IAlertContext, IAlertParam } from "./interface";

const context = createContext<IAlertContext>({} as any);
export function AlertContext(props: React.PropsWithChildren) {
 const [option, setOption] = useState<IAlertParam>({ message: "" });
 const [isShow, setIsShow] = useState<boolean>();
 useEffect(() => {
  if (!isShow) {
   setTimeout(() => {
    setOption({ message: "" });
   }, 500);
  }
 }, [isShow]);
 const show = (params: IAlertParam) => {
  setIsShow(true);
  setOption(params);
 };

 const handleCancel = () => {
  setIsShow(false);
 };
 return (
  <context.Provider value={{ showAlert: show }}>
   <Modal
    zIndex={9999}
    maskClosable={option.maskClosable}
    closable={option.closeIcon === false ? false : option.closeIcon}
    open={isShow}
    title={option.title}
    onCancel={handleCancel}
    cancelText="Đóng"
    okButtonProps={{ hidden: true }}
    // afterClose={option.onClose}
    afterClose={() => {
     option.onClose && option.onClose();
    }}
   >
    {option.message}
   </Modal>
   {props.children}
  </context.Provider>
 );
}

export function useAlert() {
 return useContext(context);
}
