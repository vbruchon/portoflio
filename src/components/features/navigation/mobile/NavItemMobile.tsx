import { motion, easeInOut } from 'framer-motion'
import { NavItem } from '../NavItem'

export type NavItemMobileProps = {
    link: { name: string; href: string }
}

export const NavItemMobile = ({ link }: NavItemMobileProps) => {
    const item = {
        hidden: { x: '150%' },
        visible: {
            x: '0%',
            transition: {
                delay: 0.5,
                ease: easeInOut,
            },
        },
    }
    return (
        <motion.div
            className="p-4 text-left"
            variants={item}
            initial="hidden"
            animate="visible"
        >
            <NavItem
                href={link.href}
                name={link.name}
                className="text-2xl text-accent"
            />
        </motion.div>
    )
}
