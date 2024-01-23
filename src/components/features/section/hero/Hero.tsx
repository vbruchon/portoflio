import { motion } from 'framer-motion'
import HiSection from './HiSection'
import Me from './Me'

type HeroPropsType = {
    key: string
}

export const Hero = ({ key }: HeroPropsType) => {
    const container = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: 'easeInOut',
            },
        },
    }

    return (
        <motion.div
            className="flex flex-col items-center justify-center gap-12 md:h-screen"
            initial="hidden"
            animate="visible"
            variants={container}
            key={key}
        >
            <motion.div
                className="lg:flex lg:flex-row-reverse"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                <Me />
                <HiSection />
            </motion.div>
        </motion.div>
    )
}
