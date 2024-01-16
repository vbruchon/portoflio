import ButtonSection from "./ButtonSection";

const HiSection = () => {
  return (
    <div className="">
      <p className="text-xl leading-relaxed md:text-2xl md:leading-loose xl:w-3/4">
        Bonjour à tous ! Je suis <br />
        <div className="ml-4">
          <h1 className="text-4xl font-medium text-primary">Vivian Bruchon</h1>
          <p>
            <span className="text-4xl font-black text-primary">
              Développeur Web passionné
            </span>
            , je mets mes compétences à votre disposition pour transformer vos
            idées en projets concrets.
          </p>
        </div>
      </p>
      <div className="mt-8">
        <ButtonSection />
      </div>
    </div>
  );
};

export default HiSection;
