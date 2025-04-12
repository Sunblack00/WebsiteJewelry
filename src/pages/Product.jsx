import ListProduct from "../components/ListProduct";
import jewelry from "../../data/jewelry.json";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
      <p className="capitalize text-5xl font-semibold text-center mt-10 ">
        {title}
      </p>
      <ListProduct products={currentProduct}></ListProduct>
      <div
        className="flex justify-between items-center m-auto text-gray-500/90 mb-40"
        style={{ width: "70%" }}
      >
        {currentPage != 1 ? (
          <button
            className="uppercase flex cursor-pointer items-center hover:text-black/65 font-medium transition duration-300"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
              setCurrentPage(currentPage - 1);
            }}
          >
            <ChevronLeft className="w-6 h-6 text-gray-500 me-2" />
            previous
          </button>
        ) : (
          <p></p>
        )}
        <div className="flex justify-center space-x-2 text-gray-500/90 absolute left-1/2 -translate-x-1/2 gap-2">
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
        {currentPage != Math.ceil(init.length / usersPerPage) ? (
          <button
            className="uppercase flex cursor-pointer items-center hover:text-black/65 font-medium transition duration-300"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
              setCurrentPage(currentPage + 1);
            }}
          >
            next
            <ChevronRight className="w-6 h-6 text-gray-500 ms-2" />
          </button>
        ) : (
          <p></p>
        )}
      </div>
    </>
  );
}
