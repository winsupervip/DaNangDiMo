import { PropsWithChildren, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  RoleBCKTEnum,
  RoleEntity,
  RoleEnum,
} from "@services/Auth/PhanQuyen/role.service";
import { UserContext } from "@contexts/useContexts";

function PageRedirectsRouters(props: PropsWithChildren) {
  const navigate = useNavigate();
  const { logout } = useContext<any>(UserContext);

  useEffect(() => {
    const role: RoleEntity = JSON.parse(localStorage.getItem("role") || "{}");

    switch (role.roleId) {
      // nhà ở riêng lẻ
      case RoleEnum.CBCC:
        navigate("/cap-phep-xay-dung/cbcc");
        break;
      case RoleEnum.truongPhong:
        navigate("/cap-phep-xay-dung/truong-phong");
        break;
      case RoleEnum.vanThu:
        navigate("/cap-phep-xay-dung/van-thu");
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
        navigate("/so-xay-dung/cbcc");
        break;
      case RoleBCKTEnum.TruongPhongKTKT:
      case RoleBCKTEnum.TruongPhongPTDTHTKT:
        navigate("/so-xay-dung/truong-phong");
        break;
      case RoleBCKTEnum.LDSoXayDung:
        navigate("/so-xay-dung/lanh-dao-so");
        break;
      case RoleBCKTEnum.VanThuSoXayDung:
        navigate("/so-xay-dung/van-thu");
        break;
      // cấp giấy phép xây dựng
      case RoleBCKTEnum.CBCCKTKT:
      case RoleBCKTEnum.CBCCPTDTHTKT:
        navigate("/cap-giay-phep-xay-dung/cbcc");
        break;
      case RoleBCKTEnum.TruongPhongKTKT:
      case RoleBCKTEnum.TruongPhongPTDTHTKT:
        navigate("/cap-giay-phep-xay-dung/truong-phong");
        break;
      case RoleBCKTEnum.LDSoXayDung:
        navigate("/cap-giay-phep-xay-dung/lanh-dao-so");
        break;
      case RoleBCKTEnum.VanThuSoXayDung:
        navigate("/cap-giay-phep-xay-dung/van-thu");
        break;
      default:
        logout();
        break;
    }
  }, []);

  return <>{props.children}</>;
}

export default PageRedirectsRouters;
