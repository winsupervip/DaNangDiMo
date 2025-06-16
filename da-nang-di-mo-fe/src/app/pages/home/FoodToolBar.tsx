import {useState} from "react";

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

export function FoodToolBar() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div
      style={{
        width: 260,
        background: "#fff",
        fontFamily: "Arial, sans-serif",
        borderRadius: 6,
        boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "16px 16px 8px 16px",
          borderBottom: "1px solid #f0f0f0",
        }}
      >
        <img
          src="https://static.foody.vn/images/icon-menu-explore-red.svg"
          alt="logo"
          style={{width: 24, height: 24, marginRight: 8}}
        />
        <span style={{fontWeight: 700, fontSize: 22}}>Khám phá</span>
      </div>
      <div>
        {menuItems.map((item, idx) => (
          <div key={item.label}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "12px 16px",
                background: item.active ? "#faf6f7" : "#fff",
                color: item.active ? "#e03" : "#222",
                fontWeight: item.active ? 500 : 400,
                cursor: "pointer",
                borderBottom:
                  idx === menuItems.length - 1 ? "none" : "1px solid #f5f5f5",
              }}
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            >
              <span style={{flex: 1}}>{item.label}</span>
              <span
                style={{
                  color: "#bbb",
                  fontSize: 16,
                  marginLeft: 8,
                  transform: openIdx === idx ? "rotate(90deg)" : "none",
                  transition: "transform 0.2s",
                }}
              >
                &#8250;
              </span>
            </div>
            {openIdx === idx && item.subItems && (
              <div style={{background: "#f9f9f9", padding: "0 0 0 24px"}}>
                {item.subItems.map((sub, subIdx) => (
                  <div
                    key={sub}
                    style={{
                      padding: "8px 0",
                      color: "#555",
                      fontSize: 15,
                      cursor: "pointer",
                    }}
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
