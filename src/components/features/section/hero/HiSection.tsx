import { motion } from 'framer-motion'
import ButtonSection from './ButtonSection'
import { useTranslation } from 'react-i18next'

const hiSectionVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: 'easeInOut',
        },
    },
}

const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
}

const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.5 },
    },
}

const HiSection = () => {
    const { t } = useTranslation('global')
    const text = t('heroSection.buisiness')
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={hiSectionVariants}
            className="m-auto lg:w-2/4 xl:w-3/5"
        >
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
                    {text.split('').map((char, index) => (
                        <motion.span
                            key={index}
                            variants={textVariants}
                            className="text-3xl font-black leading-relaxed text-primary md:text-4xl md:leading-loose xl:my-4 xl:text-5xl"
                        >
                            {char}
                        </motion.span>
                    ))}
                </motion.div>

                <p className="text-xl leading-relaxed text-accent md:mb-2 md:text-2xl md:leading-9">
                    {t('heroSection.part2')}
                </p>
                <p className="text-xl leading-relaxed text-accent md:text-2xl md:leading-9">
                    {t('heroSection.incitation')}
                </p>
            </div>
            <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
            >
                <ButtonSection />
            </motion.div>
        </motion.div>
    )
}

export default HiSection
