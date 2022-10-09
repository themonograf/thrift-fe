import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import ProductCard from "../src/components/product/Card";
import Header from "../src/layout/Header";

// import styles from "../styles/Home.module.css";

const Home: NextPage = ({ data }: any) => {
  return (
    <div className="">
      <Head>
        <title>Thrift by Monograf</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="focus:outline-none">
        <div className="container mx-auto py-8">
          <div className="mx-auto mt-10 mb-5 grid w-fit grid-cols-1 justify-center justify-items-center gap-y-10 gap-x-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data?.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(
    `https://api-thrift.themonograf.com/product?page=1&page_limit=10&product_category_id=1`
  );
  const {
    data: { data },
  } = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default Home;
