import React from "react";
import cat from "../assets/IMG_8023.jpg"
import { Link } from "react-router-dom";
import {
  AiOutlineTwitter,
  AiOutlineMail,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";

const Home = () => {
  const icon = [
    {
      id: 1,
      icon: <AiOutlineMail size={30} />,
      path: "mailto:gowthamg2704@gmail.com",
    },
    {
      id: 2,
      icon: <AiOutlineGithub size={30} />,
      path: "https://github.com/GowthamG2704/",
    },
    {
      id: 3,
      icon: <AiOutlineLinkedin size={30} />,
      path: "https://www.linkedin.com/in/gowtham-g-713225329",
    },
  ];

  return (
    <section className="flex flex-col md:flex-row items-center md:justify-between px-6 min-h-screen py-12 md:px-12 md:py-24 bg-indigo-300">
      <div className="flex lg:ml-20 flex-col md:items-start md:text-left md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Hello</h1>
        <p className="text-2xl md:text-3xl mb-4">I'm a Data Analyst</p>
        <p className="text-base md:text-xl mb-6">
          Aspiring Data Analyst with a strong foundation in mathematics and a
          passion for turning raw data into actionable insights. Proficient in
          statistical analysis, data visualization, and problem-solving. Eager
          to apply my skills to real-world projects and contribute to
          data-driven decision- making.
        </p>
        <div className="flex space-x-4">
          {icon.map((data) => (
            <Link
              to={data.path}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
              key={data.id}
              href={data.path}
              target="_blank"
            >
              {data.icon}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-8 md:mt-0 md:w-1/2">
        <img
          className="gow_img lg:max-w-lg shadow-lg"
          src={cat}
          alt="A cat"
        />
      </div>
    </section>
  );
};

export default Home;
