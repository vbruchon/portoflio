//import { EXPERIENCE as data } from "@/lib/data";
import { ResumeItem } from './ResumeItem'
import { motion } from 'framer-motion'
import { useSectionIsVisible } from '@/hooks/useSectionIsVisible'
import { useTranslation } from 'react-i18next'

const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.3,
        },
    },
}

export type ExperienceType = {
    title: string
    date: string
    link: string
    type: 'experience' | 'courses' // Ajustez cette ligne
    img: string
    description: string
}

const Resume = () => {
    const controls = useSectionIsVisible('resume')
    const { t } = useTranslation('global')

    const experiences: ExperienceType[] = t(
        'aboutSection.experienceSection.experiences',
        {
            returnObjects: true,
        }
    )

    return (
        <motion.div
            className="mx-auto mt-8 h-full w-full"
            id="resume"
            initial={'hidden'}
            variants={container}
            animate={controls}
        >
            <div className="wrap relative h-full overflow-hidden">
                <div
                    className="border-2-2 absolute h-full border border-accent-foreground border-opacity-20"
                    style={{ left: '50%' }}
                ></div>
                {experiences.map((item) => (
                    <ResumeItem data={item} key={item.title} />
                ))}
            </div>
        </motion.div>
    )
}

export default Resume
