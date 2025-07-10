import Image from "next/image";
import { createContext, useState } from "react";
import { useDispatch } from "react-redux";
import { setSelectedSubItem } from "../../../slices/selectedSubItemSlice";


const styles = {
  foodToolbar: {
    background: "#fff",
    borderRadius: 16,
    overflow: "hidden",
    margin: 20,
    boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
    width: 260,
    fontFamily: "inherit",
    fontSize: 15,
    color: "#222",
  },
  foodToolbarHeader: {
    display: "flex",
    alignItems: "center",
    padding: "16px 20px 8px 20px",
    borderBottom: "1px solid #eee",
    background: "#fff",
  },
  foodToolbarLogo: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  foodToolbarTitle: {
    fontWeight: 600,
    fontSize: 18,
    color: "#d0011b",
  },
  foodToolbarItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "14px 20px",
    borderBottom: "1px solid #eee",
    cursor: "pointer",
    background: "#fff",
    transition: "background 0.2s",
  },
  foodToolbarItemActive: {
    background: "#fff0f1",
    color: "#d0011b",
    fontWeight: 600,
  },
  foodToolbarItemLabel: {
    flex: 1,
  },
  foodToolbarItemArrow: {
    marginLeft: 8,
    transition: "transform 0.2s",
    fontSize: 18,
    color: "#bbb",
  },
  foodToolbarItemArrowOpen: {
    transform: "rotate(90deg)",
    color: "#d0011b",
  },
  foodToolbarSubmenu: {
    background: "#fafafa",
    padding: "0 20px 10px 40px",
    borderBottom: "1px solid #eee",
  },
  foodToolbarSubmenuItem: {
    padding: "8px 0",
    cursor: "pointer",
    color: "#222",
    fontSize: 14,
    borderRadius: 4,
    transition: "background 0.2s",
  },
};

const menuItems = [
  {
    label: "Ở đâu",
    active: true,
    subItems: [
      "Quận Hải Châu",
      "Quận Thanh Khê",
      "Quận Sơn Trà",
      "Quận Ngũ Hành Sơn",
    ],
  },
  {
    label: "Giao hàng",
    subItems: ["Now", "GrabFood", "Baemin"],
  },
  {label: "Ăn gì", subItems: ["Bún", "Phở", "Cơm", "Bánh mì"]},
  {label: "Sưu tập", subItems: ["Mới nhất", "Phổ biến"]},
  {label: "TV", subItems: ["Video review", "Phóng sự"]},
  {label: "Bình luận", subItems: ["Tích cực", "Tiêu cực"]},
  {label: "Blogs", subItems: ["Ẩm thực", "Du lịch"]},
  {label: "Khuyến mãi", subItems: ["Hot", "Sắp diễn ra"]},
];
interface MenuItem {
  label: string;
  active?: boolean;
  subItems?: string[];
}

// Context để truyền selectedSubItem
export const SelectedSubItemContext = createContext<string | undefined>(undefined);

export function FoodToolBar() {
  // State lưu index của menu đang mở submenu, null nếu không mở gì
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const dispatch = useDispatch();
  function getToolbarItemStyle(
    idx: number,
    menuItems: MenuItem[],
    active: boolean
  ) {
    return {
      ...styles.foodToolbarItem,
      ...(active ? styles.foodToolbarItemActive : {}),
      ...(idx === menuItems.length - 1 ? {borderBottom: "none"} : {}),
    };
  }

  return (
    <div style={styles.foodToolbar}>
      {/* Header với logo và tiêu đề */}
      <div style={styles.foodToolbarHeader}>
        <Image
          src="https://static.foody.vn/images/icon-menu-explore-red.svg"
          alt="logo"
          style={styles.foodToolbarLogo}
          width={24}
          height={24}
        />
        <span style={styles.foodToolbarTitle}>Khám phá</span>
      </div>
      <div>
        {/* Lặp qua từng menu item */}
        {menuItems.map((item, idx) => (
          <div key={item.label}>
            {/* Item chính, click để mở/đóng submenu */}
            <div
              style={getToolbarItemStyle(idx, menuItems, !!item.active)}
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            >
              <span style={styles.foodToolbarItemLabel}>{item.label}</span>
              {/* Mũi tên, xoay khi mở submenu */}
              <span
                style={{
                  ...styles.foodToolbarItemArrow,
                  ...(openIdx === idx ? styles.foodToolbarItemArrowOpen : {}),
                }}
              >
                &#8250;
              </span>
            </div>
            {/* Hiển thị submenu nếu đang mở */}
            {openIdx === idx && item.subItems && (
              <div style={styles.foodToolbarSubmenu}>
                {item.subItems.map((sub) => (
                  <div
                    key={sub}
                    style={styles.foodToolbarSubmenuItem}
                    onClick={() => dispatch(setSelectedSubItem(sub))}
                  >
                    {sub}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      
    </div>
  );
}

