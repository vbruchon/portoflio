import { LanguagePropsType } from '@/components/layout/Header'
import { ToggleThemeButton } from '@/components/theme/ThemeToggle'
import { motion, easeInOut } from 'framer-motion'
import { LanguageSwitcher } from '../../lang/LanguageSwitcher'
import { NavItemMobile } from './NavItemMobile'
import { MobileMenuProps } from './MobileMenu'

export type NavListLinkProps = {
    links: MobileMenuProps['links']
}

export const NavListLink = ({
    links,
    changeLanguage,
    currentLanguage,
}: NavListLinkProps & LanguagePropsType) => {
    return (
        <ul className="flex w-full flex-col items-end gap-2">
            {links.map((link) => (
                <NavItemMobile key={link.name} link={link} />
            ))}
            <motion.div
                className="flex items-center gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: easeInOut }}
            >
                <ToggleThemeButton />
                <LanguageSwitcher
                    changeLanguage={changeLanguage}
                    currentLanguage={currentLanguage}
                />
            </motion.div>
        </ul>
    )
}
