import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import ProductCard from "../src/components/product/Card";
import Header from "../src/layout/Header";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Thrift by Monograf</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="focus:outline-none">
        <div className="container mx-auto py-8">
          <div className="flex flex-wrap items-center justify-center lg:justify-between">
            <div className="xl:mb-15 mx-2 mb-8 w-72 focus:outline-none">
              <ProductCard />
            </div>
            <div className="xl:mb-15 mx-2 mb-8 w-72 focus:outline-none">
              <ProductCard />
            </div>
            <div className="xl:mb-15 mx-2 mb-8 w-72 focus:outline-none">
              <ProductCard />
            </div>
            <div className="xl:mb-15 mx-2 mb-8 w-72 focus:outline-none">
              <ProductCard />
            </div>
            <div className="xl:mb-15 mx-2 mb-8 w-72 focus:outline-none">
              <ProductCard />
            </div>
            <div className="xl:mb-15 mx-2 mb-8 w-72 focus:outline-none">
              <ProductCard />
            </div>
            <div className="xl:mb-15 mx-2 mb-8 w-72 focus:outline-none">
              <ProductCard />
            </div>
            <div className="xl:mb-15 mx-2 mb-8 w-72 focus:outline-none">
              <ProductCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
