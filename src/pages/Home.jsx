import Banner from "../components/home/Banner";
import Hero from "../components/home/Hero";
import CollectionSection from "../components/home/CollectionSection";
import Banner2 from "../components/home/Banner2";
import ListProduct from "../components/ListProduct";
import jewelrys from "../../data/jewelry.json";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [jewelry, setJewelry] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          "https://jewelry-backend-inrv.onrender.com/api/products"
        );
        setJewelry(res.data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      }
    };
    fetchProducts();
  }, []);

  const top6Sold = jewelry
    .sort((a, b) => b.recentlySold - a.recentlySold)
    .slice(0, 6);

  return (
    <>
      <Banner></Banner>
      <Hero></Hero>
      <CollectionSection></CollectionSection>
      <p
        className="uppercase text-center text-xl font-semibold"
        style={{ marginBottom: "-40px" }}
      >
        popular products
      </p>
      <ListProduct products={top6Sold}></ListProduct>
      <Banner2></Banner2>
    </>
  );
}
