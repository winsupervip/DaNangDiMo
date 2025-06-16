import { PropsWithChildren, useContext, useEffect, useState } from "react";
import {
  RoleBCKTEnum,
  RoleCpxdTinhEnum,
  RoleEntity,
  RoleEnum,
} from "@services/Auth/PhanQuyen/role.service";
import { useNavigate } from "react-router-dom";
import { UserContext } from "@contexts/useContexts";
function PrivateChildrenRouter(
  props: PropsWithChildren & { roleID: string; roleID2?: string }
) {
  const navigate = useNavigate();
  const { logout } = useContext<any>(UserContext);
  const [isAccess, setIsAccess] = useState(false);
  useEffect(() => {
    let role: RoleEntity = JSON.parse(localStorage.getItem("role") || "{}");
    let rolePath = localStorage.getItem("rolePath");

    if (
      role.roleId === props.roleID ||
      (props.roleID2 && role.roleId === props.roleID2)
    ) {
      setIsAccess(true);
    } else {
      switch (role.roleId) {
        case RoleEnum.CBTDTP:
          if (!rolePath) navigate("/can-bo-thong-ke");
          navigate(`${rolePath}/can-bo`);
          break;
        case RoleEnum.CBCCQHCT:
          if (!rolePath) navigate("/CBCC-thong-ke");
          navigate(`${rolePath}/CBCC`);
          break;
        // nhà ở riêng lẻ
        case RoleEnum.CBCC:
          navigate("/cap-phep-xay-dung/CBCC");
          break;
        case RoleEnum.truongPhong:
          if (!rolePath) navigate("/truong-phong-thong-ke");
          navigate(`${rolePath}/truong-phong`);
          break;
        case RoleEnum.vanThu:
          if (!rolePath) navigate("/van-thu-thong-ke");
          navigate(`${rolePath}/van-thu`);
          break;
        case RoleEnum.VanThuUBND:
          if (!rolePath) navigate("/van-thu-UBND-thong-ke");
          navigate(`${rolePath}/van-thu-UBND`);
          break;
        case RoleEnum.UBND:
          if (!rolePath) navigate("/lanh-dao-UBND-thong-ke");
          navigate(`${rolePath}/lanh-dao-UBND`);
          break;
        // phân quyền quản lý
        case RoleEnum.quanTriSo:
          navigate("/quan-tri");
          break;
        case RoleEnum.quanLy:
          navigate("/quan-ly");
          break;
        // báo cáo khả thi
        case RoleBCKTEnum.CBCCKTKT:
        case RoleBCKTEnum.CBCCPTDTHTKT:
          if (!rolePath) navigate("CBCC-tkxd-thong-ke");
          navigate(`${rolePath}/cbcc`);
          break;
        case RoleBCKTEnum.TruongPhongKTKT:
        case RoleBCKTEnum.TruongPhongPTDTHTKT:
          if (!rolePath) navigate("truong-phong-tkxd-thong-ke");
          navigate(`${rolePath}/truong-phong`);
          break;
        case RoleBCKTEnum.LDSoXayDung:
          if (!rolePath) navigate("lanh-dao-so-xd-thong-ke");
          navigate(`${rolePath}/lanh-dao-so`);
          break;
        case RoleBCKTEnum.VanThuSoXayDung:
          if (!rolePath) navigate("van-thu-so-xd-thong-ke");
          navigate(`${rolePath}/van-thu`);
          break;
        // cung cấp thông tin cấp tỉnh
        case RoleCpxdTinhEnum.CanBoThamDinhThanhPhan:
          if (!rolePath) navigate("/can-bo-xd-thong-ke");
          navigate(`${rolePath}/can-bo`);
          break;
        case RoleCpxdTinhEnum.CBCCQHKT:
          if (!rolePath) navigate("/CBCC-xd-thong-ke");
          navigate(`${rolePath}/CBCC`);
          break;
        case RoleCpxdTinhEnum.TruongPhongQHKT:
          if (!rolePath) navigate("/truong-phong-xd-thong-ke");
          navigate(`${rolePath}/truong-phong`);
          break;
        case "ctctdt":
          navigate("/chap-thuan-chu-truong");
          break;

        default:
          logout();
          break;
      }
    }
  });

  return isAccess ? (
    <>{props.children}</>
  ) : (
    <div>Tài khoản của bạn không có quyền truy cập chức năng này !</div>
  );
}

export default PrivateChildrenRouter;
