import ListProduct from "../components/ListProduct";
import jewelry from "../../data/jewelry.json";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Product() {
  const [title, setTitle] = useState("");
  const { collection } = useParams();
  const [init, setInit] = useState([]);

  useEffect(() => {
    if (collection === "all") {
      setTitle("products");
      setInit(jewelry);
    } else {
      setTitle(collection);
      setInit(
        jewelry.filter(
          (item) => item.type.toLowerCase() === collection.toLowerCase()
        )
      );
    }
  }, [collection]);

  return (
    <>
      <p className="capitalize text-5xl font-semibold text-center mt-10">
        {title}
      </p>
      <ListProduct products={init}></ListProduct>;
    </>
  );
}
