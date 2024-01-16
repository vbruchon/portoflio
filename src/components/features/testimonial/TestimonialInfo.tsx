export type TestimonialInfoProps = {
  testimonial: {
    name: string;
    role?: string;
    enterprise: string;
    content: string;
  };
};

export const TestimonialInfo = ({ testimonial }: TestimonialInfoProps) => {
  return (
    <div className="flex items-center justify-center mb-4 md:items-start md:justify-start md:mb-0 md:gap-4">
      <img
        alt="Man"
        src="src/assets/me.png"
        className="h-14 w-14 rounded-full object-cover bg-white border-2 border-accent lg:mr-4"
      />

      <div className="ml-4">
        <p className="font-medium text-xl text-foreground lg:text-xl">
          {testimonial.name}
        </p>
        <div className="flex items-center text-muted">
          {testimonial.role && (
            <>
              <p className="mr-1">{testimonial.role}</p>
              <p className="hidden md:inline-block">{" - "}</p>
            </>
          )}
          <p className="ml-1">{testimonial.enterprise}</p>
        </div>
      </div>
    </div>
  );
};
