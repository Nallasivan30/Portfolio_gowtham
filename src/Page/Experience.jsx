import React from "react";


const Experience = () => {
  const expData = [
    {
      id: 1,
      name: "Foundation Skills for Data Science with IIT Madras Pravartak",
      details:
        "Completed a course focused on essential data analysis skills using Python. Gained proficiency in data wrangling, visualization with Pandas and Matplotlib, and basic machine learning concepts. Successfully executed a capstone project, applying theoretical knowledge to a real-world data analysis scenario. This course was conducted in collaboration with IIT Madras Pravartak, ensuring a high standard of education and industry relevance.",
    },
    {
      id: 2,
      name: "360-Degree Business Analysis of Online Delivery Apps Using Power BI-Naan Mudhalvan Program",
      details:
        "This project was conducted under the Naan Mudhalvan scheme by the Government of Tamil Nadu, as part of the Data Analytics Using Power BI course taught by Edunet. In this project, I performed a comprehensive analysis of online delivery apps, focusing on key performance indicators (KPIs) such as sales performance, customer acquisition, and service efficiency. Using Power BI, I created interactive dashboards that visualized trends and provided actionable insights.",
    },
    // {
    //   id: 3,
    //   name: "VLSI Chip Verilog Code Intern",
    //   details:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore maxime nobis vero facere sapiente ducimus aliquid, quibusdam fugiat optio fuga laudantium, expedita, quia dicta repellendus praesentium. Exercitationem necessitatibus totam eum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore maxime nobis vero facere sapiente ducimus aliquid, quibusdam fugiat optio fuga laudantium, expedita, quia dicta repellendus praesentium. Exercitationem necessitatibus totam eum.",
    // },
    // {
    //   id: 4,
    //   name: "Software Engineer Intern",
    //   details:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore maxime nobis vero facere sapiente ducimus aliquid, quibusdam fugiat optio fuga laudantium, expedita, quia dicta repellendus praesentium. Exercitationem necessitatibus totam eum.",
    // },
  ];

  return (
    <section className="py-10 bg-indigo-200 md:p-12 min-h-screen">
      <h2 className="text-center text-4xl font-bold mb-8">Experience</h2>
      <div className="flex flex-wrap gap-6 pt-9 lg:pt-40 justify-center">
        {expData.map((data) => (
          <div
            key={data.id}
            className="w-full sm:w-1/2 lg:w-1/3 p-4 m-2 bg-white shadow-lg rounded-lg"
          >
            <h3 className="text-2xl font-semibold mb-2">{data.name}</h3>
            <p className="text-gray-700">{data.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
