import ListProduct from "../components/ListProduct";
import jewelry from "../../data/jewelry.json";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Product() {
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 6;
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const [title, setTitle] = useState("");
  const { collection } = useParams();
  const [init, setInit] = useState([]);
  const currentProduct = init.slice(indexOfFirstUser, indexOfLastUser);

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
      <ListProduct products={currentProduct}></ListProduct>
      <div className="flex justify-center mt-4 space-x-2 text-gray-500/90 ">
        {[...Array(Math.ceil(init.length / usersPerPage))].map((_, index) => (
          <button
            key={index}
            className={`px-0.5 mx-1 py-1 border-b-1 hover:border-b-gray-950 ${
              currentPage === index + 1
                ? "border-b-black text-black"
                : "border-b-white "
            }`}
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
              setCurrentPage(index + 1);
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
}
