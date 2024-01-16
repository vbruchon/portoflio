export const About = ({ avatarSrc = "/src/assets/me.png" }) => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center">
        <img
          className=" w-44 h-44 object-cover mb-4"
          src={avatarSrc}
          alt="my avatar"
        />

        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xl text-foreground mb-4">
            Hello, I'm Vivian Bruchon, a web developer based in Valence in Drôme
            (France).
          </p>
          <p className="text-xl text-foreground mb-4">
            I'm specialize in building modern and responsive web applications
            using the latest technologies. With a keen eye for design and a
            passion for coding, I strive to create beautiful and user-friendly
            digital experiences.
          </p>

          <p className="text-xl text-foreground">
            Let's connect and create something amazing together!
          </p>
        </div>
      </div>
    </div>
  );
};
