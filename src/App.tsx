import { AboutSection } from './components/features/section/aboutSection/AboutSection'
import { Header } from './components/features/header/Header'
import { Hero } from './components/features/section/hero/Hero'
import { ProjectSection } from './components/features/section/project/ProjectSection'
import { Skills } from './components/features/section/skills/Skills'
import { Testimonial } from './components/features/section/testimonial/Testimonial'
import { ThemeProvider } from './components/theme/ThemeProvider'

import i18next from 'i18next'
import { I18nextProvider } from 'react-i18next'
import global_en from './components/locales/en/global.json'
import global_fr from './components/locales/fr/global.json'

i18next.init({
    interpolation: { escapeValue: false },
    lng: 'en',
    resources: {
        en: { global: global_en },
        fr: { global: global_fr },
    },
})

function App() {
    return (
        <ThemeProvider>
            <I18nextProvider i18n={i18next}>
                <Header />
                <main className="mx-[5%] md:mx-[10%] xl:mx-[15%]">
                    <Hero />
                    <Skills />
                    <ProjectSection />
                    <AboutSection />
                    <Testimonial />
                </main>
            </I18nextProvider>
        </ThemeProvider>
    )
}

export default App
