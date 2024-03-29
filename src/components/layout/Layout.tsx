import { type ComponentPropsWithoutRef, type ReactNode } from 'react'
import { cn } from '../../lib/utils'
import { motion } from 'framer-motion'
import { useSectionIsVisible } from '@/hooks/useSectionIsVisible'

type LayoutTitleProps = {
    children: ReactNode
    elementId: string
} & ComponentPropsWithoutRef<'h2'>

export const Layout = (props: ComponentPropsWithoutRef<'section'>) => {
    return <section {...props} className={cn('py-16', props.className)} />
}

export const LayoutHeader = (props: ComponentPropsWithoutRef<'div'>) => {
    return (
        <div
            {...props}
            className={cn(
                'flex w-full min-w-[200px] flex-col items-start gap-1 md:flex-1',
                props.className
            )}
        />
    )
}

export const LayoutTitle = ({
    children,
    elementId,
    ...props
}: LayoutTitleProps) => {
    const controls = useSectionIsVisible(elementId)

    const titleContainer = {
        hidden: { opacity: 0, scaleX: 0 },
        visible: {
            opacity: 1,
            scaleX: 1,
            transition: {
                delay: 0.3,
            },
        },
    }
    const underlineContainer = {
        hidden: { width: '0%' },
        visible: {
            width: '115%',
            transition: {
                delay: 0.3,
                duration: 0.8,
            },
        },
    }

    return (
        <motion.div
            id={elementId}
            variants={titleContainer}
            initial="hidden"
            animate={controls}
            className="mb-6 flex flex-col gap-y-1"
        >
            <h2
                {...props}
                className={cn('text-2xl font-bold', props.className)}
            >
                {children}
            </h2>
            <motion.div
                className="h-1 rounded-xl bg-primary"
                variants={underlineContainer}
                initial="hidden"
                animate={controls}
                style={{ originX: 0 }}
            />
        </motion.div>
    )
}

export const LayoutContent = (props: ComponentPropsWithoutRef<'div'>) => {
    return <div {...props} className={cn('mx-auto', props.className)} />
}
