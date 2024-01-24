import { motion } from 'framer-motion'

export type SkillItemProps = {
    skill: {
        name: string
        icon: string
    }
}

export const SkillItem = ({ skill }: SkillItemProps) => {
    const item = {
        hidden: { y: -25, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    }

    return (
        <motion.div
            variants={item}
            className="w-1/7 flex flex-col items-center gap-4 rounded-xl  bg-card p-4"
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
