import ListProduct from "../components/ListProduct";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import axios from "axios";

export default function Product() {
  const [currentPage, setCurrentPage] = useState(1);
  const productPerPage = 6;
  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const [title, setTitle] = useState("");
  const { collection } = useParams();
  const [init, setInit] = useState([]);
  const currentProduct = init.slice(indexOfFirstProduct, indexOfLastProduct);
  const [sortOption, setSortOption] = useState("BS");
  const [priceRange, setPriceRange] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          "https://jewelry-backend-inrv.onrender.com/api/products"
        );
        const jewelry = res.data;
        let filtered = [...jewelry];
        if (collection !== "all") {
          filtered = filtered.filter(
            (item) => item.type.toLowerCase() === collection.toLowerCase()
          );
        }

        if (priceRange) {
          filtered = filtered.filter((item) => {
            const price = parseFloat(item.variants[0].price);
            if (priceRange === "0-100") return price >= 0 && price <= 100;
            if (priceRange === "100-300") return price > 100 && price <= 300;
            if (priceRange === "300-500") return price > 300 && price <= 500;
            if (priceRange === "500+") return price > 500;
            return true;
          });
        }

        if (sortOption === "AZ") {
          filtered.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortOption === "ZA") {
          filtered.sort((a, b) => b.name.localeCompare(a.name));
        } else if (sortOption === "LH") {
          filtered.sort(
            (a, b) =>
              parseFloat(a.variants[0].price) - parseFloat(b.variants[0].price)
          );
        } else if (sortOption === "HL") {
          filtered.sort(
            (a, b) =>
              parseFloat(b.variants[0].price) - parseFloat(a.variants[0].price)
          );
        } else if (sortOption === "BS") {
          filtered.sort((a, b) => b.recentlySold - a.recentlySold);
        }

        setTitle(collection === "all" ? "product" : collection);
        setInit(filtered);
        setCurrentPage(1);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [collection, sortOption, priceRange]);
  return (
    <>
      <p
        className="capitalize text-7xl font-semibold text-center mt-20 "
        style={{ fontFamily: "Allura, cursive" }}
      >
        {title}
      </p>
      <div
        className="flex gap-5 items-center justify-between m-auto"
        style={{ width: "70%", marginBottom: "-40px", marginTop: "60px" }}
      >
        <div className="flex gap-5 items-center">
          <p>Sort: </p>
          <select
            className="w-[170px] p-2 rounded-lg text-gray-600/60 focus:outline-none"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="BS">Best Selling</option>
            <option value="AZ">From A To Z</option>
            <option value="ZA">From Z To A</option>
            <option value="LH">Price, Low To High</option>
            <option value="HL">Price, High To Low</option>
          </select>
          <select
            className="w-[170px] p-2 rounded-lg text-gray-600/60 focus:outline-none"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          >
            <option value="">Select Price</option>
            <option value="0-100">$0 - $100</option>
            <option value="100-300">$100 - $300</option>
            <option value="300-500">$300 - $500</option>
            <option value="500+">$500+</option>
          </select>
        </div>
        <p className="text-gray-600/60">{init.length} products</p>
      </div>

      {init.length === 0 ? (
        <p className="text-center text-gray-500 capitalize my-20">
          No results match
        </p>
      ) : (
        <>
          <ListProduct products={currentProduct}></ListProduct>
          <div
            className="flex justify-between relative items-center m-auto text-gray-500/90 mb-40"
            style={{ width: "70%" }}
          >
            {currentPage != 1 ? (
              <button
                className="uppercase  flex cursor-pointer items-center hover:text-black/65 font-medium transition duration-300"
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
              ""
            )}
            <div className="flex justify-center space-x-2 text-gray-500/90 absolute left-1/2 -translate-x-1/2 gap-2">
              {[...Array(Math.ceil(init.length / productPerPage))].map(
                (_, index) => (
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
                )
              )}
            </div>
            {currentPage != Math.ceil(init.length / productPerPage) ? (
              <button
                className="uppercase flex cursor-pointer items-center hover:text-black/65 font-medium transition duration-300 absolute right-0"
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
      )}
    </>
  );
}
