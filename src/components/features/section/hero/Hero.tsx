import HiSection from "./HiSection";
import Me from "./Me";

export type HeroProps = {
  // TODO: Add your props here
};

export const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-12">
      <div className="lg:flex lg:flex-row-reverse">
        <Me />
        <HiSection />
      </div>
    </div>
  );
};
