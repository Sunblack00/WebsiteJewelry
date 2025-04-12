import {FaFacebookF,FaYoutube,FaInstagram, FaLinkedinIn,FaPinterestP,FaPhone,FaClock,FaEnvelope} from "react-icons/fa";

const Footer = () => {
  return (
     <>
    <footer className="mt-5 bg-white text-black px-8 py-12 font-montserrat" style={{ fontFamily: "Montserrat, sans-serif" }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* CATEGORIES */}
        <div>
          <h4 className="font-[600] text-[15px] leading-[19px] text-[#121212] mb-6">
            CATEGORIES
          </h4>
          <ul>
            {["Diamond", "Emerald", "Gold", "Platinum", "Ruby", "Sale"].map((item, i) => (
              <li
                key={i}
                className="mb-[14px] text-[12px] leading-[12px] text-black font-[400] hover:text-[#d6e5f4] cursor-pointer transition-colors duration-200"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* INFORMATION */}
        <div>
          <h4 className="font-[600] text-[15px] leading-[19px] text-[#121212] mb-6">
            INFORMATION
          </h4>
          <ul>
            {[
              "Catalog",
              "Collections",
              "About Us",
              "Contact Us",
              "Lookbook Collection",
              "FAQ",
              "Blog",
              "Privacy Policy",
            ].map((item, i) => (
              <li
                key={i}
                className="mb-[14px] text-[12px] leading-[12px] text-black font-[400] hover:text-[#d6e5f4] cursor-pointer transition-colors duration-200"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* ORDER */}
        <div>
          <h4 className="font-[600] text-[15px] leading-[19px] text-[#121212] mb-6">
            ORDER
          </h4>
          <ul>
            {["My Account", "Log in", "My Addresses", "My Orders"].map((item, i) => (
              <li
                key={i}
                className="mb-[14px] text-[12px] leading-[12px] text-black font-[400] hover:text-[#d6e5f4] cursor-pointer transition-colors duration-200"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT US */}
        <div>
          <h4 className="font-[600] text-[15px] leading-[19px] text-[#121212] mb-6">
            CONTACT US
          </h4>
          <ul className="text-[12px] leading-[12px] text-black font-[400]">
            <li className="mb-[14px] flex items-center gap-2 hover:text-[#d6e5f4] cursor-pointer transition-colors duration-200">
              <FaPhone /> Call Us: 800-123-4567
            </li>
            <li className="mb-[14px] flex items-start gap-2 hover:text-[#d6e5f4] cursor-pointer transition-colors duration-200">
              <FaClock />
              <div>
                Mon-Fri: 9:00 am - 6:00 pm<br />
                Sat: 9:00 am - 4:00 pm<br />
                Sun: 9:00 am - 2:00 pm
              </div>
            </li>
            <li className="mb-[12px] flex items-center gap-2 hover:text-[#d6e5f4] cursor-pointer transition-colors duration-200">
              <FaEnvelope /> Send us an email
            </li>
          </ul>
        </div>

        {/* FOLLOW US */}
        <div>
          <h4 className="font-[600] text-[15px] leading-[19px] text-[#121212] mb-6">
            FOLLOW US
          </h4>
          <ul className="text-[12px] leading-[15px] text-black font-[400]">
            <li className="mb-[14px] flex items-center gap-2 hover:text-[#d6e5f4] cursor-pointer transition-colors duration-200">
              <FaFacebookF /> Facebook
            </li>
            <li className="mb-[14px] flex items-center gap-2 hover:text-[#d6e5f4] cursor-pointer transition-colors duration-200">
              <FaYoutube /> Youtube
            </li>
            <li className="mb-[14px] flex items-center gap-2 hover:text-[#d6e5f4] cursor-pointer transition-colors duration-200">
              <FaInstagram /> Instagram
            </li>
            <li className="mb-[14px] flex items-center gap-2 hover:text-[#d6e5f4] cursor-pointer transition-colors duration-200">
              <FaLinkedinIn /> Linkedin
            </li>
            <li className="mb-[14px] flex items-center gap-2 hover:text-[#d6e5f4] cursor-pointer transition-colors duration-200">
              <FaPinterestP /> Pinterest
            </li>
          </ul>
        </div>
      </div>
    </footer>
    {/* BOTTOM BAR - chuyển ra ngoài footer */}
    <div className="w-full bg-black border-t border-gray-700 text-gray-500 text-sm">
  <div className="px-6 py-4 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
    <div className="mb-4 md:mb-0">© 2025 - Powered by Shopify</div>
    <div className="flex gap-2 flex-wrap justify-center">
      <img src="../../images/footer/amazon.png" alt="Amazon Pay" className="h-6 w-auto rounded-sm border border-gray-400" />
      <img src="../../images/footer/amex.png" alt="American Express" className="h-6 w-auto rounded-sm border border-gray-400" />
      <img src="../../images/footer/ipay.png" alt="Apple Pay" className="h-6 w-auto rounded-sm border border-gray-400" />
      <img src="../../images/footer/discover.png" alt="Discover" className="h-6 w-auto rounded-sm border border-gray-400" />
      <img src="../../images/footer/ggpay.png" alt="Google Pay" className="h-6 w-auto rounded-sm border border-gray-400" />
      <img src="../../images/footer/doxanh.png" alt="Maestro" className="h-6 w-auto rounded-sm border border-gray-400" />
      <img src="../../images/footer/docam.png" alt="Mastercard" className="h-6 w-auto rounded-sm border border-gray-400" />
      <img src="../../images/footer/paypay.png" alt="Paypal" className="h-6 w-auto rounded-sm border border-gray-400" />
      <img src="../../images/footer/viisa.png" alt="Visa" className="h-6 w-auto rounded-sm border border-gray-400" />
    </div>
  </div>
</div>

      </>
  );
};

export default Footer;
