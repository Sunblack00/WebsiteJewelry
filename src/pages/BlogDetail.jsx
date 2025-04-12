import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [blogList, setBlogList] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState(""); // State lưu giá trị tìm kiếm
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/data/blog.json")
      .then((res) => res.json())
      .then((data) => {
        setBlogList(data);
        const foundBlog = data.find((b) => b.id === parseInt(id));
        setBlog(foundBlog);
      });
  }, [id]);

    if (!blog) return <div className="text-center py-10">Loading...</div>;

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
     // Kiểm tra email hợp lệ và các trường không được bỏ trống
    if (!formData.name || !formData.message) {
      setError("Name and message cannot be empty.");
      return;
        }

     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email.");
      return;
        }
        
    // Nếu không có lỗi, hiển thị thông báo thành công
    setSuccessMessage(
      "Your comment was posted successfully. We will publish it in a little while, as our blog is moderated."
    );
    setError("");
    setFormData({ name: "", email: "", message: "" });
  };
  // Hàm xử lý sự kiện khi người dùng nhấn nút tìm kiếm
  const handleSearch = () => {
    // Điều hướng tới trang tìm kiếm với từ khóa tìm kiếm trong URL
    navigate(`/search?query=${searchQuery}`);
  };

  const currentIndex = blogList.findIndex((b) => b.id === parseInt(id));
  const prevBlog = blogList[currentIndex - 1];
  const nextBlog = blogList[currentIndex + 1];

  return (
    <div style={{ fontFamily: "Montserrat, sans-serif" }}>

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 p-7">
          <h1 className="text-[60px] font-semibold leading-[72px] text-black py-3">
            {blog.title}
          </h1>
          <p className="text-sm text-gray-500 mb-4 pb-10">
            {blog.date} | {blog.commentsCount} comments
          </p>

          <img
            src={blog.img}
            alt={blog.title}
            className="w-full rounded-lg mb-4"
          />

          <h2 className="text-[40px] font-semibold text-center py-10">
            {blog.title}
          </h2>

          <div className="prose max-w-none mb-10 space-y-6">
            <p>{blog.intro}</p>

            <ul className="list-disc list-inside">
              <li>Diamond</li>
              <li>Emerald</li>
              <li>Gold</li>
              <li>Platinum</li>
              <li>Ruby</li>
            </ul>

            {blog.details.map((detail, index) =>
              typeof detail === "string" ? (
                <p key={index}>{detail}</p>
              ) : detail.type === "video" ? (
                <div key={index} className="aspect-w-16 aspect-h-9">
                  <iframe
                    src={detail.url}
                    title={detail.title}
                    allowFullScreen
                    className="w-full h-96 rounded-lg"
                  ></iframe>
                </div>
              ) : null
            )}

            {/* Tags */}
            <div>
              <strong className="block text-lg font-bold mb-1 uppercase">
                Blog Tags:
              </strong>
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
                  Bracelets
                </span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
                  Earrings
                </span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
                  Necklaces
                </span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
                  Rings
                </span>
              </div>
            </div>
          </div>

          {/* Navigation (giữ nguyên demo) */}
          <div className="border-t border-b py-6 mb-10">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Previous Post */}
              {prevBlog && (
                <div className="flex items-center gap-4">
                  <img
                    src={prevBlog.img}
                    alt="Previous Post"
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div>
                    <button
                      onClick={() => navigate(`/blog/${prevBlog.id}`)}
                      className="text-sm text-gray-500 hover:underline flex items-center gap-1"
                    >
                      <span className="text-lg">&laquo;</span> Previous Post
                    </button>
                    <h3
                      onClick={() => navigate(`/blog/${prevBlog.id}`)}
                      className="font-semibold text-lg cursor-pointer hover:underline"
                    >
                      {prevBlog.title}
                    </h3>
                  </div>
                </div>
              )}

              {/* Next Post */}
              {nextBlog && (
                <div className="flex items-center gap-4 justify-end text-right">
                  <div>
                    <button
                      onClick={() => navigate(`/blog/${nextBlog.id}`)}
                      className="text-sm text-gray-500 hover:underline flex items-center gap-1 justify-end"
                    >
                      Next Post <span className="text-lg">&raquo;</span>
                    </button>
                    <h3
                      onClick={() => navigate(`/blog/${nextBlog.id}`)}
                      className="font-semibold text-lg cursor-pointer hover:underline"
                    >
                      {nextBlog.title}
                    </h3>
                  </div>
                  <img
                    src={nextBlog.img}
                    alt="Next Post"
                    className="w-24 h-24 object-cover rounded"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Comments */}
          <h2 className="text-xl font-semibold mb-6">
            {blog.commentsCount} Comments
          </h2>
          {blog.comments?.length > 0 ? (
            <div className="space-y-6">
              {blog.comments.map((comment) => (
                <div key={comment.id} className="border-b pb-4">
                  <div className="flex items-start gap-4">
                    <img
                      src={`https://i.pravatar.cc/150?u=${comment.name}`}
                      alt={comment.name}
                      className="w-12 h-12 object-cover rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold">{comment.name}</h3>
                      <p className="text-xs text-gray-500">{comment.date}</p>
                      <p className="mt-2">{comment.message}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No comments yet.</p>
          )}

          {/* Comment Form */}
          <h2 className="text-xl font-semibold mb-2 mt-15">Leave a comment</h2>
           <form className="space-y-4 mt-6" onSubmit={handleSubmit}>
            {error && <p className="text-red-500">{error}</p>}
            {successMessage && <p className="text-green-500">{successMessage}</p>}
            <textarea
              name="message"
              placeholder="Message"
              className="w-full border p-3 rounded"
              rows="4"
              value={formData.message}
              onChange={handleChange}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full border p-3 rounded"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full border p-3 rounded"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
            >
              Post Comment
            </button>
          </form>
        </div>

        {/* Right: Sidebar */}
        <aside className="space-y-8 p-12">
          {/* Search */}
          <div>
            <div className="relative">
              <span onClick={handleSearch}  className="absolute left-3 top-1/2 -translate-y-1/2 text-black text-xl">
                <FiSearch />
              </span>
              <input
                type="text"
                placeholder="Search"
                className="w-full border p-2 pl-10 rounded"
                value={searchQuery} // Gắn giá trị tìm kiếm vào input
                onChange={(e) => setSearchQuery(e.target.value)} // Cập nhật khi người dùng nhập
              />
            </div>
          </div>

          {/* Categories List */}
          <div>
            <h3 className="font-semibold mb-2">Categories List</h3>
            <ul className="text-sm text-gray-600">
              <li>Bracelets</li>
              <li>Earrings</li>
              <li>Necklaces</li>
              <li>Rings</li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="font-semibold mb-2">Recent Posts</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>
                <strong>Nov 29, 2018</strong> | 2 comments
                <br />
                Only kings and emperors, priests and pirates...
              </li>
              <li>
                <strong>Nov 29, 2018</strong> | 0 comments
                <br />
                The magical shine of our products will...
              </li>
              <li>
                <strong>Nov 29, 2018</strong> | 0 comments
                <br />
                If you are a true fan, you’ll...
              </li>
            </ul>
          </div>

          {/* Blog Tags */}
          <div>
            <h3 className="font-semibold mb-2">Blog Tags</h3>
            <div className="flex flex-wrap gap-2 text-sm">
              <span className="bg-gray-200 px-2 py-1 rounded">Bracelets</span>
              <span className="bg-gray-200 px-2 py-1 rounded">Earrings</span>
              <span className="bg-gray-200 px-2 py-1 rounded">Necklaces</span>
              <span className="bg-gray-200 px-2 py-1 rounded">Rings</span>
            </div>
          </div>

          {/* Final Sale Ad */}
          <div className="p-6 bg-[url('../images/blog/slide-1_280x380_crop_center.webp')] bg-cover bg-center text-center rounded-lg shadow-lg h-[500px]">
            <p className="text-2xl font-bold text-white mb-4">Final Sale! -15% OFF</p>
            <button className="bg-black text-white px-6 py-3 rounded">Shop Now</button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default BlogDetail;
