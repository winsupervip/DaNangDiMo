"use client";
import FastfoodIcon from '@mui/icons-material/Fastfood';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import HouseIcon from '@mui/icons-material/House';
import ReplyIcon from '@mui/icons-material/Reply';
import Image from "next/image";
import { useState } from "react";
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';

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
  hashtags: string[];
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
    hashtags: ["phở", "bò", "truyền thống"],
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
    category: "Món ăn chính",
    hashtags: ["phở", "bò", "truyền thống"],
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
    category: "Món ăn chính",
    hashtags: ["healthy", "fresh"],
    isAvailable: true,
    deliveryTime: "15-25 phút",
  },
];

export function FoodItems() {
  // State lưu danh sách id các item đã yêu thích
  const [favorites, setFavorites] = useState<number[]>([]);
  const selectedSubItem = useSelector((state: RootState) => state.selectedSubItem.value);
  const itemsFiltered = items.filter(item => item.hashtags.includes(selectedSubItem));
  console.log("Selected Sub Item:", selectedSubItem);

  return (
    <div style={styles.foodItems}>
      {itemsFiltered.map((item) => (
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
            transition: "transform 0.2s cubic-bezier(.4,2,.6,1)",
            cursor: "pointer",
            position: "relative",
            overflow: "hidden",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLDivElement).style.transform = "scale(1.05)";
            const btns = (e.currentTarget as HTMLDivElement).querySelector(
              ".hover-buttons"
            ) as HTMLDivElement;
            if (btns) btns.style.opacity = "1";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLDivElement).style.transform = "scale(1)";
            const btns = (e.currentTarget as HTMLDivElement).querySelector(
              ".hover-buttons"
            ) as HTMLDivElement;
            if (btns) btns.style.opacity = "0";
          }}
        >
            <div style={{
            position: "absolute",
            top: 10,
            left: 10,
            zIndex: 2,
            display: "flex",
            gap: 8,
            width: "calc(100% - 20px)",
            justifyContent: "space-between"
            }}>
            {/* Toggle icon dựa vào trạng thái yêu thích */}
            {favorites.includes(item.id) ? (
              <FavoriteIcon
                style={{
                  width: 30,
                  height: 30,
                  color: "#e74c3c"
                }}
                aria-label="Bỏ yêu thích"
                onClick={e => {
                  e.stopPropagation();
                  setFavorites(favs => favs.filter(id => id !== item.id));
                }}
              />
            ) : (
              <FavoriteBorderIcon
                style={{
                  width: 30,
                  height: 30,
                }}
                aria-label="Yêu thích"
                onClick={e => {
                  e.stopPropagation();
                  setFavorites(favs => [...favs, item.id]);
                }}
              />
            )}
            <ReplyIcon
              style={{
                width: 30,
                height: 30,
              }}
              aria-label="Chia sẻ"
            >
            </ReplyIcon>
          </div>
          <Image
            src={item.imageUrl}
            alt="logo"
            width={250}
            height={140}
            style={{borderTopLeftRadius: 8, borderTopRightRadius: 8, objectFit: "cover"}}
          />
          <h1 style={{margin: "5px 0 1px",fontWeight:"bold",fontSize:20,color:"ActiveCaption",fontFamily:""}}>{item.name}</h1>
          <h3 style={{fontSize: 18, color: "#e67e22", margin: "4px 0", fontWeight: "bold"}}>
            {item.price.toLocaleString()} đ
          </h3>
          <p style={{fontSize: 14, color: "#666", marginBottom: 2}}>
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
         
          <div style={{ marginBottom: 10, width: "50%" }}>
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
          width: "80%",
          margin: "0 auto",
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
      <div
        className="hover-buttons"
        style={{
          position: "absolute",
          left: 0,
          bottom: 0,
          width: "100%",
          height:25,
          opacity: 0,
          transition: "opacity 0.2s",
          display: "flex",
          zIndex: 2,
        }}
      >
        <div style={{ display: "flex", alignItems:"center", width: "50%" }}>
        <button
          style={{
            flex: 1,
            background: "#2339A7",
            color: "#fff",
            border: "none",
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 0,
            fontWeight: "bold",
            fontSize: 15,
            height: "100%",
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            outline: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 6,
          }}
        >
        <FastfoodIcon style={{ fontSize: 18 }} />
          MÓN
        </button>
        </div>
        <div style={{ display: "flex", alignItems:"center", width: "50%" }}>
        <button
          style={{
            flex: 1,
            background: "#E53935",
            color: "#fff",
            border: "none",
            borderBottomRightRadius: 8,
            borderBottomLeftRadius: 0,
            fontWeight: "bold",
            fontSize: 15,
            height: "100%",
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            outline: "none",
            cursor: "pointer",
          }}
          onClick={e => {
            // Find the card container
            const card = (e.currentTarget as HTMLElement).closest('.food-card');
            if (card) {
              card.classList.add('flipped');
            }
          }}
        >
          <HouseIcon style={{ fontSize: 18 }} />
          QUÁN
        </button>
        </div>
      </div>
        </div>
      ))}
    </div>
  );
}
