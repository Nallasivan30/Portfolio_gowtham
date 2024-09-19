import React from "react";
import Cat from "../assets/IMG_20240916_141058.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="flex flex-col pb-6 justify-center items-center bg-indigo-200 md:p-12 min-h-screen">
      <div className="">
        <h1 className='text-center text-4xl font-bold pt-5 mb-8"'>About Me</h1>
        <h3 className="text-center text-sm  text-gray-500">
          KNOW ABOUT MYSELF
        </h3>
        <div className="abt-container flex flex-col md:flex-row px-6 md:px-12 md:py-24 gap-16 items-center md:justify-between ">
          <div className="abt-img flex justify-center mt-8 md:mt-0 md:w-1/2">
            <img
              src={Cat}
              alt=""
              className="abt_img lg:max-w-lg rounded-lg shadow-lg"
            />
          </div>
          <div className="abt-cnt flex flex-col justify-center">
            <p className="pb-2">
              I am a results-driven BSc Mathematics graduate with specialized
              expertise in data analytics. My strong foundation in mathematical
              and statistical principles complements my proficiency in Python,
              MySQL, Tableau, Power BI, Excel, Pandas, and NumPy.
            </p>
            <p>
              I excel at applying advanced statistical techniques and
              mathematical models to analyze complex datasets, uncover patterns,
              and generate actionable insights. With a keen ability to translate
              data into strategic recommendations, I am committed to leveraging
              my skills to drive data-informed decision-making and achieve
              impactful business outcomes.
            </p>
            <Link
              to="https://drive.google.com/file/d/1ZR1ojq0vo1WZCF1BLTd5LxOJewrK0naq/view?usp=drivesdk"
              download
              className="self-start"
              target="_blank"
            >
              <button className="px-6 py-3 bg-slate-600 text-white font-semibold rounded-lg shadow-md hover:bg-slate-700 duration-300">
                Download CV
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
