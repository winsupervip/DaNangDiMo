"use client";
import Image from "next/image";

type FoodItem = {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  price: number; 
  place: string; 
  rating: number; 
  reviews?: number; 
  category: string; 
  isAvailable?: boolean; 
  deliveryTime?: string; 
};
const styles = {
  foodItems: {margin: "20px", display: "flex", gap: "24px"},
};
const items: FoodItem[] = [
  {
    id: 1,
    name: "Phở Bò",
    description: "Món phở truyền thống với nước dùng đậm đà.",
    imageUrl: "/images/test_pic.jpg",
    price: 50000,
    place: "Quận 1, TP.HCM",
    rating: 4.5,
    reviews: 120,
    category: "Món ăn chính",
    isAvailable: true,
    deliveryTime: "30-45 phút",
    
  },
  {
    id: 2,
    name: "Bánh Mì Thịt Nướng",
    description: "Bánh mì giòn với thịt nướng thơm ngon.",
    imageUrl: "/images/test_pic.jpg",
    price: 30000,
    place: "Quận 3, TP.HCM",
    rating: 4.2,
    reviews: 85,
    category: "Đồ ăn nhanh",
    isAvailable: true,
    deliveryTime: "20-30 phút",
  },
  {
    id: 3,
    name: "Gỏi Cuốn Tôm",
    description: "Gỏi cuốn tươi mát với tôm và rau sống.",
    imageUrl: "/images/test_pic.jpg",
    price: 20000,
    place: "Quận 5, TP.HCM",
    rating: 4.8,
    reviews: 60,
    category: "Món khai vị",
    isAvailable: true,
    deliveryTime: "15-25 phút",
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
            height: 390,
           
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            background: "#fff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Image
            src={item.imageUrl}
            alt="logo"
            width={250}
            height={140}
            style={{borderTopLeftRadius: 8, borderTopRightRadius: 8, objectFit: "cover"}}
          />
          <h1 style={{margin: "8px 0 2px",fontWeight:"bold",fontSize:20,color:"ActiveCaption",fontFamily:""}}>{item.name}</h1>
          <h3 style={{fontSize: 18, color: "#e67e22", margin: "4px 0", fontWeight: "bold"}}>
            {item.price.toLocaleString()} đ
          </h3>
          <p style={{fontSize: 14, color: "#666", marginBottom: 8}}>
            {item.place}
          </p>
          <div style={{display: "flex", alignItems: "center", gap: 2, marginBottom: 8}}>
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star} style={{color: star <= Math.round(item.rating) ? "#FFD700" : "#ddd", fontSize: 20}}>
                ★
              </span>
            ))}
            <span style={{fontSize: 14, color: "#888", marginLeft: 10,marginTop: 3}}>
              {item.rating} {item.reviews ? `(${item.reviews} reviews)` : ""}
            </span>
          </div>
        <div style={{display: "flex", gap: 8, marginTop: "auto", marginBottom: 12}}>
          <button
            style={{
              padding: "5px 10px",
              background: "#27ae60",
              color: "#fff",
              border: "none",
              borderRadius: 4,
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Đặt hàng
          </button>
            <button
            style={{
              padding: "5px 10px",
              background: "#fff",
              color: "#27ae60",
              border: "1px solid #27ae60",
              borderRadius: 4,
              fontWeight: "bold",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
            >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={18}
              height={18}
              fill="none"
              viewBox="0 0 24 24"
              style={{marginRight: 4}}
            >
              <path
              fill="#27ae60"
              d="M17 3a2 2 0 0 1 2 2v14a1 1 0 0 1-1.447.894L12 17.118l-5.553 2.776A1 1 0 0 1 5 19V5a2 2 0 0 1 2-2h10Zm0 2H7v12.382l4.553-2.277a1 1 0 0 1 .894 0L17 17.382V5Z"
              />
            </svg>
            Lưu
            </button>
        </div>
        </div>
      ))}
    </div>
  );
}
