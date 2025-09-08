"use client";

import { ApolloProvider } from '@apollo/client';
import { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import client from '../apolloClient';
import "../i18n";
import { Carousel } from "./components/Carousel";
import { Footer } from "./components/Footer";
import { HeaderBar } from "./components/Header";
import { LoadingCircleSpinner } from './loading/loadingSpinner';
import "./page.scss";
import { FoodToolBar } from "./pages/home/components/FoodToolBar";
import { store } from "./store";






const LazyFoodItems = lazy(() => import("./pages/home/components/FoodItems").then(mod => ({ default: mod.FoodItems })));






export default function Home() {



  return (
    <ApolloProvider client={client}>

    <Provider store={store}>
    <div className="page-root">
      <HeaderBar />
      <Carousel />
      <div className="food-body" style={{display: "flex"}}>
        <FoodToolBar />
        <Suspense fallback={<LoadingCircleSpinner />}>
         <LazyFoodItems  />

      </Suspense>

      </div>
      <Footer />
    </div>
    </Provider>
    </ApolloProvider>

  );
}
