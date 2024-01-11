import { EXPERIENCE as data } from "@/lib/data";
import { ResumeItem } from "./ResumeItem";

const Resume = () => {
  return (
    <div className="container mx-auto w-full h-full" id="resume">
      <div className="relative wrap overflow-hidden p-10 h-full">
        <div
          className="border-2-2 absolute border-opacity-20 border-gray-700 dark:border-gray-200 h-full border"
          style={{ left: "50%" }}
        ></div>
        {data.map((item) => (
          <ResumeItem data={item} key={item.title} />
        ))}
      </div>
    </div>
  );
};

export default Resume;
