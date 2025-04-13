import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    quote:
      "I was absolutely blown away by the quality and detail of the necklace I purchased. It exceeded all expectations and arrived beautifully packaged.",
    author: "Emily Nguyen",
    info: "Loyal Customer",
  },
  {
    quote:
      "Exceptional craftsmanship and customer service. I found the perfect engagement ring thanks to their helpful team.",
    author: "David Tran",
    info: "Engaged Buyer",
  },
  {
    quote:
      "The bracelet I bought was elegant and exactly what I was looking for. I get compliments on it every time I wear it!",
    author: "Linh Pham",
    info: "Happy Shopper",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="w-screen bg-gray-100 py-16">
      <div className="max-w-3xl mx-auto text-center px-4">
        <h2 className="text-2xl font-semibold mb-8">Testimonials</h2>
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div key={index}>
              <p className="text-lg mb-6">"{item.quote}"</p>
              <h3 className="font-bold">{item.author}</h3>
              <p className="text-sm text-gray-500">{item.info}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const AboutUs = () => {
  return (
    <>

      <div className="bg-white text-gray-800 px-6 py-12 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Welcome to our jewelry store – where elegance meets craftsmanship. We are dedicated to bringing you the finest quality jewelry, curated with passion and precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            {/* Replace with your image */}
            <div className="w-full h-64 bg-gray-200 rounded-2xl shadow-inner"></div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="mb-4">
              Founded with a deep love for timeless design, our journey began with a vision to craft jewelry that tells a story. Each piece is more than just an accessory – it's a memory, a symbol, a statement.
            </p>
            <p>
              Over the years, we have built a reputation for quality, trust, and creativity. Whether you're celebrating a milestone or simply expressing your personal style, we have something special just for you.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <p className="mb-4">
              We believe in authenticity, sustainability, and the art of fine jewelry. Our pieces are ethically sourced and meticulously crafted, ensuring beauty that lasts a lifetime.
            </p>
            <p>
              From the initial sketch to the final polish, every step reflects our commitment to excellence and care.
            </p>
          </div>
          <div className="order-1 md:order-2">
            {/* Replace with your image */}
            <div className="w-full h-64 bg-gray-200 rounded-2xl shadow-inner"></div>
          </div>
        </div>

      </div>
      <Testimonials />
    </>
  );
};

export default AboutUs;
