import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { AnimateBusiness } from './AnimateBuisiness'

export const HiContent = () => {
    const { t } = useTranslation('global')
    const text = t('heroSection.buisiness')

    const containerVariants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.5 },
        },
    }

    return (
        <>
            <p className="text-2xl leading-relaxed text-accent md:mb-4 md:text-3xl">
                {t('heroSection.part1')}
            </p>
            <div className="ml-4">
                <h1 className="text-4xl font-medium leading-relaxed text-primary md:text-5xl xl:text-6xl">
                    {t('heroSection.name')}
                </h1>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="my-4"
                >
                    <AnimateBusiness text={text} />
                </motion.div>

                <p className="text-xl leading-relaxed text-accent md:mb-2 md:text-2xl md:leading-9">
                    {t('heroSection.part2')}
                </p>
                <p className="text-xl leading-relaxed text-accent md:text-2xl md:leading-9">
                    {t('heroSection.incitation')}
                </p>
            </div>
        </>
    )
}
