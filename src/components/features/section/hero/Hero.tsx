import { motion } from 'framer-motion'
import { HiSection } from './HiSection'
import { Me } from './Me'

type HeroPropsType = {
    sectionKey: string
}

export const Hero = ({ sectionKey }: HeroPropsType) => {
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

    const heroElements = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { dealy: 0.5, duration: 1 } },
    }

    return (
        <motion.div
            className="flex flex-col items-center justify-center gap-12 md:h-screen"
            initial="hidden"
            animate="visible"
            variants={container}
            key={sectionKey}
        >
            <motion.div
                className="lg:flex lg:flex-row-reverse"
                initial="hidden"
                animate="visible"
                variants={heroElements}
            >
                <Me />
                <HiSection />
            </motion.div>
        </motion.div>
    )
}
