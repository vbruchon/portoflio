import { LanguagePropsType } from '@/components/layout/Header'
import CountryFlag from 'react-country-flag'

export const LanguageSwitcher = ({
    changeLanguage,
    currentLanguage,
}: LanguagePropsType) => {
    return (
        <div>
            <CountryFlag
                countryCode={currentLanguage === 'en' ? 'GB' : 'FR'}
                svg
                onClick={() =>
                    changeLanguage(currentLanguage === 'en' ? 'fr' : 'en')
                }
                style={{
                    width: '25px',
                    height: '25px',
                    cursor: 'pointer',
                    borderRadius: '100%',
                }}
            />
        </div>
    )
}
