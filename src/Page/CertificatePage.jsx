import React from "react";
import img1 from "../assets/ms.jpg";
import img2 from "../assets/nm.jpg";
import img3 from "../assets/vts.jpeg"

const certificates = [
  {
    imgSrc: img1,
    details:
      "This certificate is awarded for successfully completing the certification course in Fundamentals of Artificial Intelligence and Machine Learning. The course is part of the TechSaksham initiative, a joint CSR effort by Microsoft and SAP, implemented by the Edunet Foundation. The certificate includes logos of Microsoft, Edunet Foundation, and SAP, and is signed by representatives from each organization.",
  },
  {
    imgSrc: img2,
    details:
      "This certificate is awarded for successfully completing the course in Data Analytics using PowerBI. It is part of the Naan Mudhalvan Scheme, sponsored by the Government of Tamil Nadu and implemented by the Edunet Foundation. The certificate includes logos of the involved organizations, a QR code for verification, and official signatures.",
  },
  {
    imgSrc: img3,
    details:
      "Conducted in-depth COVID-19 data analysis and visualization using Power BI and Tableau, identifying key trends and patterns. Analyzed and visualized organic e-commerce store product and sales data (real-time) using SQL, Power BI, and Tableau, enabling insights into customer behavior and sales performance.Developed house pricing prediction models and created visualizations to analyze market trends, pricing factors, and regional insights.Prepared and delivered PowerPoint presentations for all projects, effectively communicating findings and recommendations to stakeholders.",
  },
  // Add more certificates as needed
];

const CertificatePage = () => {
  return (
    <div className="p-6 space-y-6 bg-indigo-300">
      <h2 className="text-center text-4xl font-bold pt-4 mb-12">My Certificates</h2>
      {certificates.map((certificate, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row ${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          } items-center justify-center`}
        >
          <div className="w-full md:w-1/2 p-4 flex justify-center">
            <img
              src={certificate.imgSrc}
              alt={`Certificate ${index + 1}`}
              className="w-full  lg:h-[650px] object-fill rounded shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 p-4 text-center md:text-left">
            <p className="text-xl md:text-2xl">{certificate.details}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CertificatePage;
