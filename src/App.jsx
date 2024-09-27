import { useEffect, useState } from "react";
import Header from "./Page/Header";
import Index from "./Page/index";
import Home from "./Page/Home";
import About from "./Page/About";
import Skill from "./Page/Skill";
import Experience from "./Page/Experience";
import Project from "./Page/Project";
import Contact from "./Page/Contact";
import ExpTimelin from "./Page/ExpTimelin";
import CertificatePage from "./Page/CertificatePage";

import { Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

// const [data, setData] = useState([]);
// useEffect(() => {
//   const first = async () => {
//     await axios
//       .get("https://dummyjson.com/users?limit=9&&select=firstName,age")
//       .then((res) => setData(res.data.users));
//   };
//   first();
// }, []);
// console.log(data, "json");


  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/About" element={<About />} />
        <Route path="/Skill" element={<Skill />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/CertificatePage" element={<CertificatePage />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/ExpTimelin" element={<ExpTimelin />} />
      </Routes>
    </>
  );
}

export default App;
