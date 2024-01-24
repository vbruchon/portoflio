import { useState } from 'react'
import { Header } from './components/layout/Header'
import { ThemeProvider } from './components/theme/ThemeProvider'
import i18next from 'i18next'
import { I18nextProvider } from 'react-i18next'
import GoogleFontLoader from 'react-google-font-loader'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import global_en from './locales/en/global.json'
import global_fr from './locales/fr/global.json'

import Portfolio from '../pages/Portfolio'
import MentionsLegales from '../pages/Mentions-legales'
import Footer from './components/layout/Footer'

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

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Portfolio currentLanguage={currentLanguage} />,
        },
        {
            path: '/mentions-legales',
            element: <MentionsLegales />,
        },
    ])

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
                    <RouterProvider router={router} />
                </main>
                <Footer
                    changeLanguage={changeLanguage}
                    currentLanguage={currentLanguage}
                />
            </I18nextProvider>
        </ThemeProvider>
    )
}

export default App
