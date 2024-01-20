import { ResumeItemProps } from '@/lib/data'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

export const ResumeItem = ({ data }: ResumeItemProps) => {
    const isCourse = data.type === 'courses'
    const isExperience = data.type === 'experience'

    return (
        <motion.div
            className={cn(
                'mb-8 flex w-full flex-col items-center justify-between',
                {
                    'right-timeline md:flex-row': isExperience,
                    'left-timeline md:flex-row-reverse': isCourse,
                }
            )}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="order-1 w-full md:w-5/12"></div>
            <div
                className={`z-20 order-1 mb-2 flex h-28 w-28 items-center rounded-full border-2 border-primary shadow-xl md:mb-0 `}
            >
                <motion.a href={data.link}>
                    <img
                        src={data.img}
                        alt="Avatar"
                        className="mx-auto h-full w-full rounded-full object-cover"
                    />
                </motion.a>
            </div>
            <motion.div
                className={cn(
                    'z-20 order-1 rounded-lg bg-card px-4 py-4 shadow-xl md:w-5/12 md:px-6'
                )}
                initial={{ x: isCourse ? -1000 : 1000 }}
                animate={{ x: 0 }}
                transition={{ duration: 1 }}
            >
                <h3 className="mb-3 text-center text-xl font-bold text-accent">
                    {data.title}
                </h3>
                <p className="mb-2 text-center text-base font-medium text-accent xl:text-left">
                    {data.date}
                </p>
                <p className="hidden leading-6 text-foreground md:block md:text-center md:text-lg lg:text-left">
                    {data.description}
                </p>
            </motion.div>
        </motion.div>
    )
}
