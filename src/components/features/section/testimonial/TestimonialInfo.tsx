import { cn } from '@/lib/utils'
import { TestimonialProps } from './TestimonialItem'

export const TestimonialInfo = ({ testimonial }: TestimonialProps) => {
    return (
        <div
            className={cn(
                'mb-2 flex flex-col items-center justify-center gap-2 ',
                'md:w-full md:flex-row md:items-start',
                'lg:items-center'
            )}
        >
            <a href={testimonial.link} target="_blank" rel="noreferrer">
                <img
                    alt="Man"
                    src={testimonial.img}
                    className="h-16 w-16 rounded-full object-cover lg:mr-4"
                />
            </a>
            <div
                className={cn(
                    'ml-4 flex flex-col text-center leading-relaxed',
                    'md:text-start',
                    'lg:ml-0'
                )}
            >
                <p className="text-xl font-medium text-foreground lg:text-xl">
                    {testimonial.name}
                </p>
                <div
                    className={cn(
                        'flex flex-col items-center text-muted md:flex-row md:gap-x-2 lg:flex-col lg:items-start'
                    )}
                >
                    {testimonial.role && (
                        <>
                            <p className="mr-1">{testimonial.role}</p>
                            <p className="hidden md:inline-block lg:hidden">
                                {' - '}
                            </p>
                        </>
                    )}
                    <a
                        href={testimonial.enterpriseLink}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span className="ml-1">{testimonial.enterprise}</span>
                    </a>
                </div>
            </div>
        </div>
    )
}
