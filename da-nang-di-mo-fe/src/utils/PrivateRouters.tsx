import { PropsWithChildren, useContext, useEffect, useState } from "react";
import { UserContext } from "src/contexts/useContexts";
function PrivateRouter(props: PropsWithChildren) {
  const { checkAccess } = useContext<any>(UserContext);
  const [isRequest, setIsRequest] = useState(false);
  const [isAccess, setIsAccess] = useState(false);
  useEffect(() => {
    const setAccsess = async () => {
      const isAcess = await checkAccess();
      setIsAccess(isAcess);
    };

    try {
      setAccsess();
    } catch (error) {
    } finally {
      setIsRequest(true);
    }
  });
  if (!isRequest) {
    return <>Đang kiểm tra quyền truy cập</>;
  }
  return isAccess ? <>{props.children}</> : <div>Không có quyền truy cập</div>;
}

export default PrivateRouter;
