"use client";

import { ApolloProvider } from '@apollo/client';
import { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import useSWR from 'swr';
import client from '../apolloClient';
import "../i18n";
import { Carousel } from "./components/Carousel";
import { Footer } from "./components/Footer";
import { HeaderBar } from "./components/Header";
import "./page.scss";
import { FoodToolBar } from "./pages/home/components/FoodToolBar";
import { store } from "./store";
import { LoadingCircleSpinner } from './loading/loadingSpinner';

const LazyFoodItems = lazy(() => import("./pages/home/components/FoodItems").then(mod => ({ default: mod.FoodItems })));



export default function Home() {
 const fetcher = (args:string) => fetch(args).then(res => res.json())
   const { data, error, isLoading,isValidating } = useSWR('http://localhost:3000/api/fooditems', fetcher)
if (isLoading) return <LoadingCircleSpinner />
if (isValidating) return <LoadingCircleSpinner />
if (error) return <div>Lỗi khi tải dữ liệu</div>

   console.log(data);

  return (
    <ApolloProvider client={client}>

    <Provider store={store}>
    <div className="page-root">
      <HeaderBar />
      <Carousel />
      <div className="food-body" style={{display: "flex"}}>
        <FoodToolBar />
        <Suspense fallback={<LoadingCircleSpinner />}>
        <LazyFoodItems foodItems={data}/>
      </Suspense>

      </div>
      <Footer />
    </div>
    </Provider>
    </ApolloProvider>

  );
}
