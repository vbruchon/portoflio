import { motion } from 'framer-motion'
import { SkillCategory } from './SkillCategory'
import { SkillItem, SkillItemProps } from './SkillItem'
import { useSectionIsVisible } from '@/hooks/useSectionIsVisible'

const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            duration: 1,
        },
    },
}

export type SkillsListProps = {
    skills: SkillItemProps['skill'][]
    category: string
}

export const SkillList = ({ skills, category }: SkillsListProps) => {
    const controls = useSectionIsVisible('skills-section-id')

    return (
        <motion.div
            id="skills-section-id"
            variants={container}
            initial="hidden"
            animate={controls}
        >
            <SkillCategory title={category} />
            <div className="my-10 flex flex-wrap items-center justify-center gap-2">
                {skills.map((skill) => (
                    <SkillItem key={skill.name} skill={skill} />
                ))}
            </div>
        </motion.div>
    )
}
