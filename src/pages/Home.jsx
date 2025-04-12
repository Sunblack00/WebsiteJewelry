import Banner from "../components/home/Banner";
import Hero from "../components/home/Hero";
import CollectionSection from "../components/home/CollectionSection";
import Banner2 from "../components/home/Banner2";
import ListProduct from "../components/ListProduct";
import jewelrys from "../../data/jewelry.json";

export default function Home() {
  const top6Sold = jewelrys
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
