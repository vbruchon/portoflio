import { Layout, LayoutContent, LayoutHeader, LayoutTitle } from '../../Layout'
import { useTranslation } from 'react-i18next'
import ButtonSection from '../hero/ButtonSection'
import { useSectionIsVisible } from '@/hooks/useSectionIsVisible'
import { motion } from 'framer-motion'

const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: 'easeInOut',
            staggerChildren: 0.1,
            delayChildren: 0.5,
        },
    },
}

const buttonSectionVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { delay: 0.5, duration: 0.8 }, // Ajout du délai supplémentaire
    },
}

export const Contact = () => {
    const { t } = useTranslation('global')
    const controls = useSectionIsVisible('contact-content-section')

    return (
        <>
            <Layout>
                <LayoutHeader>
                    <LayoutTitle elementId="contact-section">
                        {t('contactSection.title')}
                    </LayoutTitle>
                </LayoutHeader>
                <LayoutContent>
                    <motion.div
                        id="contact-content-section"
                        initial="hidden"
                        variants={container}
                        animate={controls}
                        className="my-10 flex flex-col items-center gap-6"
                    >
                        <p className="text-center text-xl text-accent">
                            {t('contactSection.content')}
                        </p>
                        <motion.div
                            className="mt-8"
                            initial="hidden"
                            variants={buttonSectionVariants}
                            animate={controls}
                        >
                            <ButtonSection reverse={true} />
                        </motion.div>
                    </motion.div>
                </LayoutContent>
            </Layout>
        </>
    )
}
