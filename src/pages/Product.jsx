import ListProduct from "../components/ListProduct";
import jewelrys from "../../data/jewelry.json";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Product() {
  const jewrly = jewelrys.slice(12, 18);
  const [title, setTitle] = useState("");
  const { collection } = useParams();

  useEffect(() => {
    if (collection === "all") {
      setTitle("products");
    } else {
      setTitle(collection);
    }
  }, [collection]);

  return (
    <>
      <p className="capitalize text-5xl font-semibold text-center mt-10">{title}</p>
      <ListProduct products={jewrly}></ListProduct>;
    </>
  );
}
