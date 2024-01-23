import { motion } from 'framer-motion'
import { CardContent } from '@/components/ui/card'
import { ProjectLinks } from './ProjectLinks'
import { cn } from '@/lib/utils'
import { useSectionIsVisible } from '@/hooks/useSectionIsVisible'
import { ProjectType } from './ProjectSection'

type ProjectProps = {
    project: ProjectType
    index: number
}

const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: 'easeInOut',
        },
    },
}

export const Project = ({ project }: ProjectProps) => {
    const controls = useSectionIsVisible('project-element')

    return (
        <motion.div
            id="project-element"
            variants={item}
            animate={controls}
            initial="hidden"
            className={cn(
                'relative h-full w-full rounded-xl border bg-card transition-all hover:scale-105',
                'lg:h-[585px] lg:w-1/3 xl:h-[480px]'
            )}
        >
            <img
                src={project.thumbnailUrl}
                alt={project.title}
                className="mb-4 h-48 w-full rounded-xl object-cover"
                style={{
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                }}
            />
            <CardContent className="mt-auto flex flex-grow flex-col">
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {project.title}
                </h3>
                <p className="mb-4 text-foreground">{project.description}</p>
                <ProjectLinks
                    githubUrl={project.githubUrl}
                    demoUrl={project.demoUrl}
                />
            </CardContent>
        </motion.div>
    )
}
