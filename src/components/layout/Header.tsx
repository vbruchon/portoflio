import { ToggleThemeButton } from '@/components/theme/ThemeToggle'
import { Nav } from '../features/navigation/Nav'
import { LanguageType } from '@/App'
import { LanguageSwitcher } from '../features/lang/LanguageSwitcher'

export type LanguagePropsType = {
    currentLanguage: LanguageType
    changeLanguage: (newLanguage: LanguageType) => void
}

export const Header = ({
    changeLanguage,
    currentLanguage,
}: LanguagePropsType) => {
    return (
        <header className="mt-2 flex items-center justify-around md:mt-4 md:justify-evenly">
            <img src="/logo_white.png" className="h-auto w-1/12 md:w-14" />
            <Nav
                changeLanguage={changeLanguage}
                currentLanguage={currentLanguage}
            >
                <ToggleThemeButton />
                <LanguageSwitcher
                    changeLanguage={changeLanguage}
                    currentLanguage={currentLanguage}
                />
            </Nav>
        </header>
    )
}
