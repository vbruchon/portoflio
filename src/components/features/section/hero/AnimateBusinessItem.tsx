import { motion } from 'framer-motion'
export type AnimateBusinessProps = {
    char: string
}

const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
}

export const AnimateBusinessItem = ({ char }: AnimateBusinessProps) => {
    return (
        <motion.span
            variants={textVariants}
            className="text-3xl font-black leading-relaxed text-primary md:text-4xl md:leading-loose xl:my-4 xl:text-5xl"
        >
            {char}
        </motion.span>
    )
}
