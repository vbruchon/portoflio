import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { CloseButton } from './CloseButton'
import { LogoMobileMenu } from './LogoMobileMenu'
import { NavListLink } from './NavListLink'
import { LanguagePropsType } from '@/components/layout/Header'
import { MobileMenuProps } from './MobileMenu'

export type NavMobileProps = {
    links: MobileMenuProps['links']
    changeLanguage: LanguagePropsType['changeLanguage']
    currentLanguage: LanguagePropsType['currentLanguage']
    onClose: MobileMenuProps['onClose']
}

export const NavMobile = ({
    links,
    onClose,
    changeLanguage,
    currentLanguage,
}: NavMobileProps) => {
    const navVariants = {
        hidden: { x: '100%' },
        visible: { x: '0%', transition: { duration: 0.5, ease: 'easeInOut' } },
    }
    return (
        <motion.nav
            variants={navVariants}
            initial="hidden"
            animate="visible"
            className={cn(
                'absolute right-0 top-0 z-10',
                'flex flex-col justify-center gap-8 sm:items-end',
                'h-full w-3/4 bg-background p-8'
            )}
        >
            <CloseButton onClose={onClose} />
            <LogoMobileMenu />
            <NavListLink
                links={links}
                changeLanguage={changeLanguage}
                currentLanguage={currentLanguage}
            />
        </motion.nav>
    )
}
