import { useState } from 'react'
import { AboutSection } from './components/features/section/aboutSection/AboutSection'
import { Header } from './components/layout/Header'
import { Hero } from './components/features/section/hero/Hero'
import { ProjectSection } from './components/features/section/project/ProjectSection'
import { Skills } from './components/features/section/skills/Skills'
import { Testimonial } from './components/features/section/testimonial/Testimonial'
import { ThemeProvider } from './components/theme/ThemeProvider'
import GoogleFontLoader from 'react-google-font-loader'

import i18next from 'i18next'
import { I18nextProvider } from 'react-i18next'
import global_en from './locales/en/global.json'
import global_fr from './locales/fr/global.json'
import { Contact } from './components/features/section/contact/Contact'

i18next.init({
    interpolation: { escapeValue: false },
    lng: 'en',
    resources: {
        en: { global: global_en },
        fr: { global: global_fr },
    },
})

export type LanguageType = string

function App() {
    const [currentLanguage, setCurrentLanguage] = useState('en')

    const changeLanguage = (newLanguage: LanguageType) => {
        i18next.changeLanguage(newLanguage)
        setCurrentLanguage(newLanguage)
    }

    return (
        <ThemeProvider>
            <I18nextProvider i18n={i18next}>
                <GoogleFontLoader
                    fonts={[
                        { font: 'Rubik Mono One', weights: [400] },
                        { font: 'Palanquin Dark', weights: [400] },
                    ]}
                />
                <Header
                    changeLanguage={changeLanguage}
                    currentLanguage={currentLanguage}
                />
                <main className="mx-[5%] md:mx-[10%] xl:mx-[15%]">
                    <Hero sectionKey={currentLanguage} />
                    <Skills />
                    <ProjectSection />
                    <AboutSection />
                    <Testimonial />
                    <Contact />
                </main>
            </I18nextProvider>
        </ThemeProvider>
    )
}

export default App
