import { Button } from '@/components/ui/button'
import { AlignRight } from 'lucide-react'
import { useState } from 'react'
import { NavItem } from './NavItem'
import { MobileMenu } from './mobile/MobileMenu'
import { useTranslation } from 'react-i18next'
import { LanguagePropsType } from '../../layout/Header'
import { cn } from '@/lib/utils'

type NavProps = {
    children: React.ReactNode
    changeLanguage: LanguagePropsType['changeLanguage']
    currentLanguage: LanguagePropsType['currentLanguage']
    className?: string
}

export const Nav = ({
    children,
    changeLanguage,
    currentLanguage,
    className,
}: NavProps) => {
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
                <nav className={cn('flex items-center gap-8', className)}>
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
