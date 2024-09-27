import React from "react";
import Home from "./Home";
import About from "./About";
import Skill from "./Skill";
import Experience from "./Experience";
import Certificate from "./CertificatePage";
import Project from "./Project";
import Contact from "./Contact";

const Index = () => {
  return (
    <div>
      <Home />
      <About />
      <Skill />
      <Experience />
      <Certificate />
      <Project />
      <Contact />
    </div>
  );
};

export default Index;
