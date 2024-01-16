import { TestimonialInfo } from "./TestimonialInfo";

export type TestimonialItemProps = {
  testimonial: {
    name: string;
    role?: string;
    enterprise: string;
    content: string;
  };
};

export const TestimonialItem = ({ testimonial }: TestimonialItemProps) => {
  return (
    <blockquote className="lg:!w-[97%] p-6 bg-card rounded-lg my-4 mx-auto shadow-md">
      <TestimonialInfo testimonial={testimonial} />
      <p className="mt-4 lg:text-center text-lg text-muted lg:text-xl">
        {testimonial.content}
      </p>
    </blockquote>
  );
};
