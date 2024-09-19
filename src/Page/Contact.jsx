import React from "react";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-indigo-300 p-6 md:p-12 min-h-screen">
      <div className="max-w-lg w-full bg-slate-200  shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-6">
          Contact Information
        </h1>
        <p className="text-lg text-center text-gray-700 mb-8">
          Feel free to reach out to me through any of the following methods:
        </p>
        <div className="space-y-4">
          {/* Email */}
          <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition-colors duration-200">
            <AiOutlineMail className="text-blue-600 text-2xl" />
            <Link
              to={"mailto:gowthamg2704@gmail.com"}
              className="text-lg text-gray-700 hover:text-blue-600"
              target="_blank"
            >
              gowthamg2704@gmail.com
            </Link>
          </div>
          {/* Phone */}
          <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition-colors duration-300">
            <AiOutlinePhone className="text-green-600 text-2xl" />
            <span className="text-lg text-gray-700">+91 9385382946</span>
          </div>
          {/* WhatsApp */}
          <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition-colors duration-300">
            <AiOutlineWhatsApp className="text-green-400 text-2xl" />
            <Link
              to={"https://wa.me/9385382946"}
              target="_blank"
              className="text-lg text-gray-700 hover:text-green-600"
            >
              9385382946 (Professional WhatsApp)
            </Link>
          </div>
          {/* LinkedIn */}
          <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition-colors duration-300">
            <AiOutlineLinkedin className="text-blue-700 text-2xl" />
            <Link
              to={"https://www.linkedin.com/in/gowtham-g-713225329"}
              target="_blank"
              className="text-lg text-gray-700 hover:text-blue-600"
            >
              linkedin.com/in/gowtham-g
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
