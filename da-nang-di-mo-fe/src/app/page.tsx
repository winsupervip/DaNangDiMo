"use client";

import { Carousel } from "./components/Carousel";

import { Footer } from "./components/Footer";
import { HeaderBar } from "./components/Header";
import "./page.scss";
import { FoodItems } from "./pages/home/components/FoodItems";
import { FoodToolBar } from "./pages/home/components/FoodToolBar";


export default function Home() {
  // const router = useRouter();

  // useEffect(() => {
  //   router.push("/auth/login");
  // }, [router]);

  return (
    <div className="page-root">
      <HeaderBar />
      <Carousel />
      <div className="food-body" style={{display: "flex"}}>
        <FoodToolBar />
        <FoodItems />
      </div>
      <Footer />
    </div>
  );
}
