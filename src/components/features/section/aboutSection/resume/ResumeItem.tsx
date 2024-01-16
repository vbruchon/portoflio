import { ResumeItemProps } from "@/lib/data";
import { cn } from "@/lib/utils";

export const ResumeItem = ({ data }: ResumeItemProps) => {
  return (
    <div
      className={cn("mb-8 flex justify-between items-center flex-col w-full", {
        "right-timeline": data.type === "experience",
        "left-timeline": data.type === "courses",
        "md:flex-row-reverse": data.type === "courses",
        "md:flex-row": data.type === "experience",
      })}
    >
      <div className="order-1 w-full md:w-5/12"></div>
      <div
        className={`z-20 flex items-center order-1 border-2 border-primary shadow-xl w-28 h-28 rounded-full mb-2 md:mb-0 `}
      >
        <a href={data.link}>
          <img
            src={data.img}
            alt="Avatar"
            className="mx-auto h-full w-full object-cover rounded-full"
          />
        </a>
      </div>
      <div
        className={cn(
          "z-20 order-1 rounded-lg shadow-xl md:w-5/12 px-4 md:px-6 py-4 bg-card"
        )}
      >
        <h3 className="mb-3 font-bold md:text-xl text-foreground">
          {data.title}
        </h3>
        <p className="text-center md:text-left text-sm font-medium text-foreground mb-2">
          {data.date}
        </p>
        <p className="hidden md:block leading-6 text-foreground">
          {data.description}
        </p>
      </div>
    </div>
  );
};
