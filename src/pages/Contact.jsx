import React from "react";



const Contact = () => {
  return (
    <>
      <div className="bg-white  py-12">
        <div className=" bg-gray-200 text-center mb-12 py-13">
          <h1 className="text-5xl font-bold mb-2">Contact Us</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-12 mx-auto w-[80%]">
          <div>
            <h2 className="text-xl font-semibold mb-2">We're here to help you!</h2>
            <p className="text-sm text-gray-600 mb-6">
              Have a question, comment, or brilliant idea you'd like to share? Send us a little note below – we love to hear from you and will always reply!
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-start">
                <svg className="w-6 h-6 mb-2 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M22 16.92V21a2 2 0 01-2.18 2A19.73 19.73 0 013 5.18 2 2 0 015 3h4.09a2 2 0 012 1.72 12.06 12.06 0 001.05 3.26 2 2 0 01-.45 2.11L10 11a16 16 0 006 6l1.91-1.91a2 2 0 012.11-.45 12.06 12.06 0 003.26 1.05A2 2 0 0122 16.92z" />
                </svg>
                <h3 className="font-semibold text-lg">Phone Number</h3>
                <p className="text-sm text-gray-500">Call Us:</p>
                <p className="text-md">800-123-4567</p>
              </div>

              <div className="flex flex-col items-start">
                <svg className="w-6 h-6 mb-2 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M4 4h16v16H4z" fill="none" />
                  <path d="M22 6l-10 7L2 6" />
                </svg>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-md">demo@demo.com</p>
              </div>

              <div className="flex flex-col items-start">
                <svg className="w-6 h-6 mb-2 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
                <h3 className="font-semibold text-lg">Location</h3>
                <p className="text-sm text-gray-500">
                  2972 Westheimer Rd. Santa Ana,<br />
                  Illinois 85486
                </p>
              </div>

              <div className="flex flex-col items-start">
                <svg className="w-6 h-6 mb-2 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                <h3 className="font-semibold text-lg">Opening Hours</h3>
                <p className="text-sm text-gray-500">Mon–Fri: 9:00 am – 6:00 pm</p>
                <p className="text-sm text-gray-500">Sat: 9:00 am – 4:00 pm</p>
                <p className="text-sm text-gray-500">Sun: 9:00 am – 2:00 pm</p>
              </div>
            </div>
          </div>

          <div className="pl-30">
            <h2 className="text-xl font-semibold mb-2">Do you want to get in touch?</h2>
            <p className="text-sm text-gray-600 mb-6">Let us know how we can help you.</p>
            <form className="space-y-4">
              <input type="text" placeholder="Name" className="w-full border border-gray-300 rounded px-4 py-2" />
              <input type="email" placeholder="Email" className="w-full border border-gray-300 rounded px-4 py-2" />
              <textarea placeholder="Message" rows="4" className="w-full border border-gray-300 rounded px-4 py-2"></textarea>
              <button type="submit" className="w-full bg-black text-white px-6 py-2 rounded hover:bg-gray-800">SUBMIT</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
