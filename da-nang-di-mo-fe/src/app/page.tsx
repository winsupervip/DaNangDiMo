"use client";

import { Provider } from 'react-redux';
import { Carousel } from "./components/Carousel";
import { Footer } from "./components/Footer";
import { HeaderBar } from "./components/Header";
import "./page.scss";

import { lazy, Suspense } from 'react';
import { FoodToolBar } from "./pages/home/components/FoodToolBar";
import { store } from "./store";

const LazyFoodItems = lazy(() => import("./pages/home/components/FoodItems").then(mod => ({ default: mod.FoodItems })));



export default function Home() {
  // const router = useRouter();

  // useEffect(() => {
  //   router.push("/auth/login");
  // }, [router]);

  return (
    <Provider store={store}>
    <div className="page-root">
      <HeaderBar />
      <Carousel />
      <div className="food-body" style={{display: "flex"}}>
        <FoodToolBar />
        <Suspense fallback={<div>Đang tải foodItems...</div>}>
        <LazyFoodItems />
      </Suspense>

      </div>
      <Footer />
    </div>
    </Provider>
  );
}
