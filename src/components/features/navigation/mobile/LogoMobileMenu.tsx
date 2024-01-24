import { motion, easeInOut } from 'framer-motion'

export const LogoMobileMenu = () => {
    const logoVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.5,
                ease: easeInOut,
            },
        },
    }

    return (
        <motion.a
            href="/"
            className="mx-auto mb-[15%]"
            variants={logoVariants}
            initial="hidden"
            animate="visible"
        >
            <img src={'logo_black.png'} className="w-20 " />
        </motion.a>
    )
}
