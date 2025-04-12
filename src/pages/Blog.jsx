import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // THÊM DÒNG NÀY

function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/data/blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) =>
        console.error("Không thể tải blog, kiểm tra lại !!!", err)
      );
  }, []);

  return (
    <div
      className="bg-white text-black"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="">
              <img
                src={blog.img}
                alt={blog.title}
                className="w-full h-auto rounded-md mb-4"
              />
              <div className="text-sm text-gray-500 mb-2">
                {blog.date} | {blog.comments.length} COMMENTS
              </div>
              <h3 className="text-2xl font-bold mb-2 truncate">{blog.title}</h3>
              <Link
                to={`/blog/${blog.id}`} // dùng Link thay vì thẻ <a>
                className="text-sm font-semibold text-[#f2dee3] hover:underline hover:text-black px-3 py-1 inline-block rounded"
              >
                READ MORE
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
