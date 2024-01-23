import { Button } from '@/components/ui/button'
import { AlignRight } from 'lucide-react'
import { useState } from 'react'
import { NavItem } from './NavItem'
import { MobileMenu } from './MobileMenu'
import { useTranslation } from 'react-i18next'
import { LanguagePropsType } from './Header'

type NavProps = {
    children: React.ReactNode
}

export const Nav = ({
    children,
    changeLanguage,
    currentLanguage,
}: NavProps & LanguagePropsType) => {
    const { t } = useTranslation('global')

    const links = [
        { name: t('aboutSection.title'), href: '#about' },
        { name: t('skillSection.title'), href: '#skills' },
        { name: t('projectSection.title'), href: '#projects' },
        { name: t('testimonialSection.title'), href: '#testimonials' },
        { name: t('contactSection.title'), href: '#contact' },
    ]

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((curr) => !curr)
    }

    return (
        <div>
            <div className="hidden md:flex md:items-center">
                <nav className="flex items-center gap-8">
                    {links.map((link) => (
                        <NavItem
                            key={link.name}
                            href={link.href}
                            name={link.name}
                        />
                    ))}
                    {children}
                </nav>
            </div>
            <div className="p-4 md:hidden">
                <Button variant={'outline'} onClick={toggleMobileMenu}>
                    <AlignRight />
                </Button>
                {isMobileMenuOpen && (
                    <MobileMenu
                        links={links}
                        onClose={toggleMobileMenu}
                        changeLanguage={changeLanguage}
                        currentLanguage={currentLanguage}
                    />
                )}
            </div>
        </div>
    )
}
