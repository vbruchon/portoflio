import { motion } from 'framer-motion'

const Me = () => {
    const meVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: 'easeInOut',
            },
        },
    }

    return (
        <motion.img
            src="src/assets/me.png"
            className="mx-auto mb-2 w-[60%] md:w-[45%] lg:h-[350px] lg:w-[350px] "
            initial="hidden"
            animate="visible"
            variants={meVariants}
        />
    )
}

export default Me
