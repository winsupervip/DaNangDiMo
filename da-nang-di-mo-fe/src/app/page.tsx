"use client";
import {useRouter} from "next/navigation";

import {Carousel} from "./components/Carousel";

import {HeaderBar} from "./components/Header";
import "./page.scss";
import {Footer} from "./components/Footer";
import {FoodToolBar} from "./pages/home/FoodToolBar";

export default function Home() {
  const router = useRouter();

  // useEffect(() => {
  //   router.push("/auth/login");
  // }, [router]);

  return (
    <div className="page-root">
      <HeaderBar />
      <Carousel />
      <div className="food-body">
        <FoodToolBar />
        <div className="food-list-content"></div>
      </div>
      <Footer />
    </div>
  );
}
