import { cn } from '@/lib/utils'
import { TestimonialInfo } from './TestimonialInfo'

export type TestimonialProps = {
    testimonial: {
        img: string
        link?: string
        name: string
        role?: string
        enterprise: string
        enterpriseLink: string
        content: string
    }
}

export const TestimonialItem = ({ testimonial }: TestimonialProps) => {
    return (
        <blockquote
            className={cn(
                'mx-auto my-4 flex h-[600px] flex-col items-center rounded-xl bg-card p-6 shadow-md',
                'md:h-[380px]',
                'lg:h-[565px] lg:!w-[97%]',
                'xl:h-[515px] 2xl:h-[420px]'
            )}
        >
            <TestimonialInfo testimonial={testimonial} />
            <p className="my-auto text-center text-lg text-muted lg:text-xl">
                {testimonial.content}
            </p>
        </blockquote>
    )
}
