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

export const Project = ({ project }: ProjectProps) => {
    const controls = useSectionIsVisible('project-element')

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
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.05,
            },
        },
    }

    return (
        <motion.div
            id="project-element"
            variants={item}
            animate={controls}
            initial="hidden"
            whileHover="hover"
            className={cn(
                'relative h-full w-full transform rounded-xl bg-card shadow-sm shadow-foreground transition-transform hover:scale-110',
                'ml-2 lg:h-[610px] lg:w-1/2 xl:h-[575px] xl:w-1/3 2xl:h-[550px]'
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
            <CardContent className="my-auto flex flex-col">
                <h3 className="mb-2 text-center text-2xl font-semibold text-foreground lg:text-xl">
                    {project.title}
                </h3>
                <p className="mb-4 text-foreground xl:mt-3">
                    {project.description}
                </p>
                <ProjectLinks
                    githubUrl={project.githubUrl}
                    demoUrl={project.demoUrl}
                />
            </CardContent>
        </motion.div>
    )
}
