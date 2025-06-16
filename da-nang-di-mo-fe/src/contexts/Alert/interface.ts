export interface IAlertParam {
 maskClosable?: boolean;
 title?: string;
 message: string | React.ReactNode;
 closeIcon?: boolean;
 onClose?: () => void;
}
export interface IAlertContext {
 showAlert: (params: IAlertParam) => void;
}
