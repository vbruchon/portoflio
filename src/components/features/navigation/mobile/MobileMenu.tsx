import { motion, AnimatePresence, easeInOut } from 'framer-motion'
import { LanguagePropsType } from '../../../layout/Header'
import { cn } from '@/lib/utils'
import { NavMobile } from './NavMobile'

export type MobileMenuProps = {
    links: { name: string; href: string }[]
    onClose: () => void
    changeLanguage: LanguagePropsType['changeLanguage']
    currentLanguage: LanguagePropsType['currentLanguage']
}

export const MobileMenu = ({
    links,
    onClose,
    changeLanguage,
    currentLanguage,
}: MobileMenuProps) => {
    const container = {
        hidden: { opacity: 0, y: '-100%' },
        visible: {
            opacity: 1,
            y: '0%',
            transition: { duration: 0.5, ease: easeInOut },
        },
    }
    return (
        <AnimatePresence>
            <motion.div
                key="mobile-menu"
                variants={container}
                initial="hidden"
                animate="visible"
                className={cn(
                    'absolute left-0 top-0 z-10 ',
                    'h-full w-full',
                    'bg-gray-700 bg-opacity-50 backdrop-blur-lg'
                )}
            >
                <NavMobile
                    links={links}
                    currentLanguage={currentLanguage}
                    changeLanguage={changeLanguage}
                    onClose={onClose}
                />
            </motion.div>
        </AnimatePresence>
    )
}
