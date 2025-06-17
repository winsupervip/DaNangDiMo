"use client";
import Image from "next/image";

type FoodItem = {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
};
const styles = {
  foodItems: {margin: "20px", display: "flex", gap: "24px"},
};
const items: FoodItem[] = [
  {
    id: 1,
    name: "Phở Bò",
    description: "Món phở truyền thống với nước dùng đậm đà.",
    imageUrl: "https://example.com/pho-bo.jpg",
    price: 50000,
  },
  {
    id: 2,
    name: "Bánh Mì Thịt Nướng",
    description: "Bánh mì giòn với thịt nướng thơm ngon.",
    imageUrl: "https://example.com/banh-mi.jpg",
    price: 30000,
  },
  {
    id: 3,
    name: "Gỏi Cuốn Tôm",
    description: "Gỏi cuốn tươi mát với tôm và rau sống.",
    imageUrl: "https://example.com/goi-cuon.jpg",
    price: 20000,
  },
];

export function FoodItems() {
  return (
    <div style={styles.foodItems}>
      {items.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #eee",
            borderRadius: 8,
            width: 250,
            padding: 16,
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            background: "#fff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Image
            src="https://static.foody.vn/images/icon-menu-explore-red.svg"
            alt="logo"
            width={250}
            height={140}
          />
          <h3 style={{margin: "8px 0 4px"}}>{item.name}</h3>
          <p style={{fontSize: 14, color: "#666", marginBottom: 8}}>
            {item.description}
          </p>
          <div style={{fontWeight: 600, color: "#e67e22"}}>
            {item.price.toLocaleString()} đ
          </div>
        </div>
      ))}
    </div>
  );
}
