import { motion } from 'framer-motion'
import { ButtonSection } from './ButtonSection'
import { HiContent } from './HiContent'

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

const buttonSectionVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.8, duration: 0.8 } },
}

export const HiSection = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={hiSectionVariants}
            className="m-auto lg:w-2/4 xl:w-3/5"
        >
            <HiContent />
            <motion.div
                className="mt-8"
                variants={buttonSectionVariants}
                initial="hidden"
                animate="visible"
            >
                <ButtonSection />
            </motion.div>
        </motion.div>
    )
}
