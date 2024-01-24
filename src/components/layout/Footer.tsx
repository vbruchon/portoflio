import { useTranslation } from 'react-i18next'
import { NavItem } from '../features/navigation/NavItem'
import { ToggleThemeButton } from '../theme/ThemeToggle'
import { LanguageSwitcher } from '../features/lang/LanguageSwitcher'
import { LanguagePropsType } from './Header'

type FooterPropsType = {
    changeLanguage: LanguagePropsType['changeLanguage']
    currentLanguage: LanguagePropsType['currentLanguage']
}

const Footer = ({ changeLanguage, currentLanguage }: FooterPropsType) => {
    const { t } = useTranslation('global')

    const links = [
        { name: t('aboutSection.title'), href: '#about' },
        { name: t('skillSection.title'), href: '#skills' },
        { name: t('projectSection.title'), href: '#projects' },
        { name: t('testimonialSection.title'), href: '#testimonials' },
        { name: t('contactSection.title'), href: '#contact' },
        { name: 'Mentions Légales', href: '/mentions-legales' },
        { name: 'Portfolio', href: '/' },
    ]

    return (
        <footer
            className="border-t-[1px] border-accent bg-background py-8 text-white"
            style={{ backdropFilter: 'blur(50px)' }}
        >
            <div className="container mx-auto flex flex-wrap items-center justify-center gap-6">
                <div className="flex flex-row flex-wrap justify-center gap-4 text-lg">
                    {links.map((link) => (
                        <NavItem
                            key={link.name}
                            href={link.href}
                            name={link.name}
                            className="mb-2 text-left text-accent lg:mb-0 lg:mr-6"
                        />
                    ))}

                    <ToggleThemeButton />
                    <LanguageSwitcher
                        changeLanguage={changeLanguage}
                        currentLanguage={currentLanguage}
                    />
                </div>
            </div>
            <p className="my-1 ml-4 text-base text-accent">
                {t('footer.updatedAt')}
            </p>
        </footer>
    )
}

export default Footer
