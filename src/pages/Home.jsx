import React from "react";
import Banner from "../components/home/Banner";
import Hero from "../components/home/Hero";
import CollectionSection from "../components/home/CollectionSection";
import Banner2 from "../components/home/Banner2";
import ListProduct from "../components/ListProduct";
import { jewrlys } from "../../data/jewrlry";

export default function Home() {
  const jewrly = jewrlys.slice(0, 6);

  return (
    <>
      <Banner></Banner>
      <Hero></Hero>
      <CollectionSection></CollectionSection>
      <p className="uppercase text-center text-xl font-semibold">
        popular products
      </p>
      <ListProduct products={jewrly}></ListProduct>
      <Banner2></Banner2>
    </>
  );
}
