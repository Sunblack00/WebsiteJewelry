import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ListProduct from "../components/ListProduct"; // Giả sử đây là component hiển thị sản phẩm

const SearchResults = () => {
  const [blogList, setBlogList] = useState([]);
  const [productList, setProductList] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedType, setSelectedType] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 6;
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query")?.toLowerCase() || "";

  useEffect(() => {
    // Fetch both blog and product data
    fetch("/data/blog.json")
      .then((res) => res.json())
      .then((data) => {
        setBlogList(data);
      });

    fetch("/data/jewelry.json")
      .then((res) => res.json())
      .then((data) => {
        setProductList(data);
      });
  }, []);

  useEffect(() => {
    // Filter blogs based on the query and selected type
    const filteredBlogs = blogList.filter((blog) => {
      const matchesQuery = blog.title.toLowerCase().includes(query);
      const matchesType =
        selectedType === "All" ||
        selectedType === "Blog" ||
        blog.type === selectedType;
      return matchesQuery && matchesType;
    });
    setFilteredBlogs(filteredBlogs);

    // Filter products based on the query and selected type
    const filteredProducts = productList.filter((product) => {
      const matchesQuery = product.name.toLowerCase().includes(query);
      const matchesType =
        selectedType === "All" ||
        selectedType === "Product" ||
        product.loc === selectedType;
      return matchesQuery && matchesType;
    });
    setFilteredProducts(filteredProducts);
  }, [blogList, productList, query, selectedType]);

  // Sliced data for pagination
  const currentBlogs = filteredBlogs.slice(indexOfFirstUser, indexOfLastUser);
  const currentProducts = filteredProducts.slice(
    indexOfFirstUser,
    indexOfLastUser
  );

  const types = ["All", "Blog", "Product"];

  return (
    <div style={{ fontFamily: "Montserrat, sans-serif" }}>
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Tiêu đề kết quả */}
        <h1 className="text-[32px] font-black leading-[42px] text-black py-3 text-center">
          {filteredBlogs.length + filteredProducts.length} Search Results for:{" "}
          <span className="text-black-500">"{query}"</span>
        </h1>

        {/* Bộ lọc loại nằm bên trái */}
        <div className="flex flex-col gap-1 mb-8 items-start">
          {types.map((type) => (
            <button
              key={type}
              className={`px-4 py-2 rounded-full transition-all text-lg font-semibold ${
                selectedType === type
                  ? "text-black"
                  : "text-pink-300 hover:text-pink-100"
              }`}
              onClick={() => setSelectedType(type)}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Kết quả tìm kiếm */}
        <div>
          {filteredBlogs.length === 0 && filteredProducts.length === 0 ? (
            <p className="text-center text-gray-500">No Results Match</p>
          ) : (
            <div>
              {/* Blog Results */}
              {(selectedType === "All" || selectedType === "Blog") &&
                currentBlogs.length > 0 && (
                  <div>
                    {selectedType === "All" ? (
                      <h2 className="text-xl font-bold text-black mt-5 mb-6 pb-2">
                        Blog
                      </h2>
                    ) : (
                      ""
                    )}
                    <div className="space-y-8">
                      {currentBlogs.map((blog) => (
                        <div
                          key={blog.id}
                          className="flex flex-col md:flex-row items-start gap-4 rounded-lg p-3 mt-14"
                        >
                          {blog.img && (
                            <img
                              src={blog.img}
                              alt={blog.title}
                              className="w-full md:w-48 h-32 object-cover rounded-lg "
                            />
                          )}
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-black ">
                              {blog.title}
                            </h3>
                            <p className="text-sm text-gray-500">{blog.date}</p>
                            <p className="mt-2 text-gray-700 text-sm line-clamp-3">
                              {blog.intro}
                            </p>
                            <a
                              href={`/blog/${blog.id}`}
                              className="text-blue-600 text-sm mt-3 inline-block hover:underline transition-all"
                            >
                              Xem chi tiết →
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              {/* Product Results */}
              {(selectedType === "All" || selectedType === "Product") &&
                currentProducts.length > 0 && (
                  <div>
                    {selectedType === "All" ? (
                      <h2 className="text-xl font-bold text-black mt-5 mb-6 pb-2">
                        Product
                      </h2>
                    ) : (
                      ""
                    )}
                    <ListProduct products={currentProducts} />{" "}
                    {/* Bạn có thể dùng component này để hiển thị sản phẩm */}
                  </div>
                )}
            </div>
          )}
          {/* Phân trang */}
          {filteredBlogs.length !== 0 || filteredProducts.length !== 0 ? (
            <div
              className="flex justify-between items-center m-auto text-gray-500/90 mb-40 mt-10"
              style={{ width: "70%" }}
            >
              {currentPage !== 1 && (
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
              )}
              <div className="flex justify-center space-x-2 text-gray-500/90 absolute left-1/2 -translate-x-1/2 gap-2">
                {[
                  ...Array(
                    Math.ceil(
                      (filteredBlogs.length + filteredProducts.length) /
                        usersPerPage
                    )
                  ),
                ].map((_, index) => (
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
              {currentPage !==
                Math.ceil(
                  (filteredBlogs.length + filteredProducts.length) /
                    usersPerPage
                ) && (
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
              )}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
