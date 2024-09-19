import React, { useState } from "react";
import Modals from "./Modal";

const SkillBox = ({ data1 }) => {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(data, "data");

  const showModal = (skill) => {
    setData(data1.filter((data) => data.title === skill.title));
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="skills-container">
        {data1.map((skill) => (
          <div
            key={skill.title}
            className="skill-box"
            onClick={() => showModal(skill)}
          >
            <h2 className="skill-title">{skill.title}</h2>
            <ul className="skill-keywords">
              {skill.keywords.map((keyword) => (
                <li key={keyword.id} className="skill-keyword">
                  {keyword.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Modals
        handleCancel={handleCancel}
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        data={data}
      />
    </div>
  );
};

export default SkillBox;
