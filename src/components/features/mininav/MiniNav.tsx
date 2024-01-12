import { useState } from "react";
import Resume from "../resume/Resume";
import { About } from "../about/About";

export const MiniNav = () => {
  const [activeSection, setActiveSection] = useState("about");

  return (
    <div className="py-2">
      <div className="container mx-auto flex justify-center items-center gap-6">
        <button
          className={`text-lg font-semibold px-4 focus:outline-none ${
            activeSection === "about" ? "bg-primary p-2 rounded-lg" : ""
          }`}
          onClick={() => setActiveSection("about")}
        >
          About Me
        </button>
        <button
          className={`text-lg font-semibold px-4 focus:outline-none ${
            activeSection === "resume"
              ? "bg-primary p-2 rounded-lg"
              : "hover:bg-primary hover:p-2 hover:rounded-lg"
          }`}
          onClick={() => setActiveSection("resume")}
        >
          Resume
        </button>
      </div>
      {activeSection === "about" ? <About /> : <Resume />}
    </div>
  );
};
