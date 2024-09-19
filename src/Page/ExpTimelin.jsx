import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { MdWorkHistory, MdCastForEducation, MdStar } from "react-icons/md";

const ExpTimelin = () => {
  const Exp = [
    {
      id: 1,
      icon: <MdWorkHistory />,
      date: "November 2021",
      borderRight: "7px solid  rgb(23, 150, 243)",
      background: "rgb(33, 150, 243)",
      title: "Creative Director",
      subtitile: "San Francisco, CA",
      detail:
        "Creative Direction, User Experience, Visual Design, SEO, Online Marketing",
    },
    {
      id: 2,
      icon: <MdWorkHistory />,
      date: "November 2021",
      color: "7px solid  rgb(23, 150, 243)",
      background: "rgb(23, 150, 24)",
      title: "Art Director",
      subtitile: "San Francisco, CA",
      detail:
        "Creative Direction, User Experience, Visual Design, SEO, Online Marketing Creative Direction, User Experience, Visual Design, SEO, Online Marketing",
    },
    {
      id: 3,
      icon: <MdWorkHistory />,
      date: "November 2021",
      borderRight: "7px solid  rgb(23, 150, 243)",
      background: "rgb(33, 150, 243)",
      title: "Web Designer",
      subtitile: "San Francisco, CA",
      detail: "",
    },
    {
      id: 4,
      icon: <MdWorkHistory />,
      date: "November 2021",
      borderRight: "7px solid  rgb(23, 150, 24)",
      background: "rgb(23, 150, 24)",
      title: "Web Designer",
      subtitile: "San Francisco, CA",
      detail:
        "User Experience, Visual Design Creative Direction, User Experience, Visual Design, SEO, Online Marketing Creative Direction, User Experience, Visual Design, SEO, Online Marketing Creative Direction, User Experience, Visual Design, SEO, Online Marketing",
    },
    {
      id: 5,
      icon: <MdCastForEducation />,
      date: "November 2021",
      borderRight: "7px solid  rgb(30, 170, 249)",
      background: "rgb(23, 150, 243)",
      title: "Online Course",
      subtitile: "San Francisco, CA",
      detail: "User Experience, Visual Design",
    },
    {
      id: 6,
      icon: <MdCastForEducation />,
      date: "November 2021",
      borderRight: "7px solid  rgb(33, 150, 24)",
      background: "rgb(23, 150, 24)",
      title: "Certification",
      subtitile: "San Francisco, CA",
      detail: "Creative Direction, Visual Design",
    },
    {
      id: 7,
      icon: <MdCastForEducation />,
      date: "November 2021",
      borderRight: "7px solid  rgb(23, 150, 243)",
      background: "rgb(23, 150, 243)",
      title: "Bachelor of Science in Interactive Digital Media Visual Imaging",
      subtitile: "San Francisco, CA",
      detail:
        "Creative Direction, User Experience, Visual Design, SEO, Online Marketing Creative Direction, User Experience, Visual Design, SEO, Online Marketing Creative Direction, User Experience, Visual Design, SEO, Online Marketing",
    },
  ];

  return (
    <div>
      <VerticalTimeline lineColor="gray" animate>
        {Exp.map((data) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: data.background, color: "#fff" }}
            contentArrowStyle={{ borderRight: data.borderRight }}
            date={data.date}
            iconStyle={{ background: data.background , color: "#fff" }}
            icon={data.icon}
          >
            <h3 className="vertical-timeline-element-title">{data.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">
              {data.subtitile}
            </h4>
            <p>{data.detail}</p>
          </VerticalTimelineElement>
        ))}
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<MdStar />}
        />
      </VerticalTimeline>
    </div>
  );
};

export default ExpTimelin;
