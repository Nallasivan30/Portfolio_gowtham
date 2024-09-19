import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const headerData = [
    { id: 1, name: "Home", path: "/" },
    { id: 1, name: "About", path: "/About" },
    { id: 2, name: "Skill", path: "/Skill" },
    { id: 3, name: "Experience", path: "/Experience" },
    { id: 4, name: "Certificate", path: "/CertificatePage" },
    { id: 5, name: "Project", path: "/Project" },
    { id: 6, name: "Contact", path: "/Contact" },
  ];
  return (
    <section className="flex justify-between px-5 py-5 bg-slate-700 text-white">
      <div>
        <Link
          to="/"
          className="text-2xl font-bold text-slate-100 hover:text-white"
        >
          Gowtham G
        </Link>
      </div>
      <nav className="hidden md:block ">
        <div className="flex gap-5">
          {headerData.map((data, index) => (
            <Link
              className="p-1 desk-nav text-white duration-300"
              to={data.path}
              key={index}
            >
              {data.name}
            </Link>
          ))}
        </div>
      </nav>

      {toggle && (
        <nav className="block md:hidden py-2 mobile-nav">
          <div className="flex flex-col gap-5">
            {headerData.map((data, index) => (
              <Link
                onClick={() => setToggle(!toggle)}
                className="md-nav pt-1 text-white duration-300"
                to={data.path}
                key={index}
              >
                {data.name}
              </Link>
            ))}
          </div>
        </nav>
      )}

      <button onClick={() => setToggle(!toggle)} className="block md:hidden">
        <IoMdMenu className="text-white h-5" />
      </button>
    </section>
  );
};

export default Header;
