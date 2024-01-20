import { cn } from '@/lib/utils'

export type TestimonialInfoProps = {
    testimonial: {
        img: string
        name: string
        role?: string
        enterprise: string
        content: string
    }
}

export const TestimonialInfo = ({ testimonial }: TestimonialInfoProps) => {
    return (
        <div
            className={cn(
                'mb-2 flex flex-col items-center justify-center gap-2 ',
                'md:w-full md:flex-row md:items-start',
                'lg:items-center'
            )}
        >
            <img
                alt="Man"
                src={testimonial.img}
                className="h-16 w-16 rounded-full object-cover lg:mr-4"
            />

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
                    <p className="ml-1">{testimonial.enterprise}</p>
                </div>
            </div>
        </div>
    )
}
