import { motion } from 'framer-motion'

export type SkillItemProps = {
    skill: {
        name: string
        icon: string
    }
}

const item = {
    hidden: { y: -25, opacity: 0 },
    visible: { y: 0, opacity: 1 },
}

export const SkillItem = ({ skill }: SkillItemProps) => {
    return (
        <motion.div
            variants={item}
            className="w-1/7 flex flex-col items-center gap-4 rounded-lg border bg-card p-4 shadow-md"
        >
            <img
                src={skill.icon}
                alt={skill.name}
                className="h-16 w-16 object-contain"
            />
            <p className="text-center text-sm text-foreground">{skill.name}</p>
        </motion.div>
    )
}
