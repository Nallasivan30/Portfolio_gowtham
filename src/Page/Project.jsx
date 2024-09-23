import React from "react";
import { Link } from "react-router-dom";
const Project = () => {
  const proData = [
    {
      id: 1,
      name: "Super market Product Management System",
      btn: "Know More",
      path: "https://github.com/GowthamG2704/Supermarket_Product_Management_System",
    },
    {
      id: 2,
      name: "360 degree Business Analysis of Zomato using PowerBI",
      btn: "Know More",
      path: "https://github.com/GowthamG2704/360-degree-Business-Analysis-of-Zomato",
    },
    {
      id: 3,
      name: "Tableau Sales Forecasting ",
      btn: "Know More",
      path: "https://github.com/GowthamG2704/Tableau-Sales-Forecasting",
    },
    {
      id: 4,
      name: "Heart Failure Analysis Using EDA ",
      btn: "Know More",
      path: "https://github.com/GowthamG2704/-Heart-Failure-Analysis-Using-EDA",
    },
    {
      id: 5,
      name: "Netflix TV shows and Movies EDA ",
      btn: "Know More",
      path: "https://github.com/GowthamG2704/Netflix-TV-shows-and-Movies-EDA",
    }
  ];

  return (
    <section className="py-10 w-full flex flex-col justify-center bg-indigo-200 items-center">
      <h2 className="text-center text-4xl font-bold mb-8">My Projects</h2>
      <div className="w-full max-w-4xl px-4">
        {proData.map((data, index) => (
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 md:mb-8 p-4 bg-blue-200 shadow-lg rounded-lg hover:shadow-inner transition-shadow duration-300">
            <>
              <p className="text-2xl pt-6 ">{data.name}</p>
              <Link
                to={data.path}
                target="_blank"
                className="text-xl text-white hover:text-white hover:font-bold shadow-lg px-2 h-[30px] rounded-lg bg-slate-500 hover:bg-slate-600 transition-shadow duration-300"
              >
                {data.btn}
              </Link>
            </>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
