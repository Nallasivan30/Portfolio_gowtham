import React from "react";
import SkillBox from "../Component/skillBox";

const Skill = () => {
  const skillData = [
    {
      title: "Python",
      keywords: [
        {
          id: 1,
          name: "Pandas",
          description:
            "Experienced in using Pandas for efficient data manipulation and analysis. Skilled in handling large datasets, cleaning data, and performing advanced aggregations to support insightful data-driven decisions.",
        },
        {
          id: 2,
          name: "Numpy",
          description:
            "Proficient in NumPy for numerical computing, leveraging its powerful array operations and mathematical functions to perform efficient data manipulation and complex calculations.",
        },
        {
          id: 3,
          name: "Matplotlib",
          description:
            "Skilled in Matplotlib for creating detailed and customizable visualizations. Adept at generating a wide range of charts and plots to effectively present data insights and trends.",
        },
        {
          id: 4,
          name: "Seaborn",
          description:
            "Experienced with Seaborn for advanced statistical data visualization. Capable of creating informative and aesthetically pleasing plots to highlight patterns and relationships within datasets.",
        },
      ],
    },
    {
      title: "Database",
      keywords: [
        {
          id: 1,
          name: "SQL",
          description:
            "Skilled in SQL for querying and managing relational databases. Proficient in writing complex queries, optimizing performance, and extracting valuable insights from structured data.",
        },
        {
          id: 2,
          name: "MongoDB",
          description:
            "Experienced with MongoDB for handling and querying NoSQL databases. Adept at managing unstructured data, designing flexible schemas, and leveraging MongoDB's features for scalable data solutions.",
        },
      ],
    },
    {
      title: "Data Visualization",
      keywords: [
        {
          id: 1,
          name: "Tableau",
          description:
            "Proficient in Tableau for creating interactive and dynamic dashboards. Skilled in visualizing complex data to provide clear, actionable insights and facilitate data-driven decision-making.",
        },
        {
          id: 2,
          name: "PowerBi",
          description:
            "Experienced with Power BI for developing interactive reports and dashboards. Capable of transforming raw data into meaningful insights through advanced visualization and data analysis features.",
        },
      ],
    },
    {
      title: "Data Analysis",
      keywords: [
        {
          id: 1,
          name: "Data Cleaning",
          description:
            "Expert in data cleaning, adept at identifying and rectifying inaccuracies, inconsistencies, and missing values to ensure data quality and integrity for accurate analysis.",
        },
        {
          id: 2,
          name: "Data Analytics",
          description:
            "Data analysis involves systematically inspecting, cleaning, and modeling data to extract meaningful information and support decision-making. It combines statistical techniques and visualization to identify trends, relationships, and insights within the data.",
        },
        {
          id: 3,
          name: "Exploratory Data Analysis",
          description:
            "Exploratory Data Analysis (EDA) involves summarizing and visualizing datasets to uncover patterns, anomalies, and insights. Its ultimate goal is to inform and guide subsequent analysis and modeling decisions.",
        },
      ],
    },
    {
      title: "MS Office",
      keywords: [
        {
          id: 1,
          name: "MS Excel",
          description:
            "Skilled in Microsoft Excel for data analysis, visualization, and complex calculations, utilizing advanced functions, pivot tables, and macros to streamline workflows and enhance data-driven decision-making.",
        },
        {
          id: 2,
          name: "MS Word",
          description:
            "Proficient in Microsoft Word for creating, formatting, and editing professional documents, with expertise in utilizing templates, styles, and advanced features to produce polished and well-organized content.",
        },
        {
          id: 3,
          name: "MS Powerpoint",
          description:
            "Experienced in Microsoft PowerPoint for designing and delivering impactful presentations, leveraging advanced tools and features to create visually appealing slides that effectively communicate key messages.",
        },
      ],
    },
  ];

  
  return (
    <section className="bg-indigo-300">
      <h2 className="text-center text-4xl font-bold pt-14 mb-8">Skill</h2>
      <h3 className="text-center text-sm text-gray-500">MY SKILLSETS</h3>
      <div className="skills-container lg:pt-40">
        <SkillBox data1={skillData} />
      </div>
    </section>
  );
};

export default Skill;
