import { motion, AnimatePresence, easeInOut } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'
import { NavItem } from './NavItem'
import { LanguageSwitcher } from '@/components/locales/LanguageSwitcher'
import { ToggleThemeButton } from '@/components/theme/ThemeToggle'
import { LanguagePropsType } from './Header'
import { cn } from '@/lib/utils'

type MobileMenuProps = {
    links: { name: string; href: string }[]
    onClose: () => void
}

const container = {
    hidden: { opacity: 0, y: '-100%' },
    visible: {
        opacity: 1,
        y: '0%',
        transition: { duration: 0.5, ease: easeInOut },
    },
}

const navVariants = {
    hidden: { x: '100%' },
    visible: { x: '0%', transition: { duration: 0.5, ease: 'easeInOut' } },
}

const logoVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.5,
            ease: easeInOut,
        },
    },
}

const item = {
    hidden: { x: '150%' },
    visible: {
        x: '0%',
        transition: {
            delay: 0.5,
            ease: easeInOut,
        },
    },
}
export const MobileMenu = ({
    links,
    onClose,
    changeLanguage,
    currentLanguage,
}: MobileMenuProps & LanguagePropsType) => {
    return (
        <AnimatePresence>
            <motion.div
                key="mobile-menu"
                variants={container}
                initial="hidden"
                animate="visible"
                className={cn(
                    'absolute left-0 top-0 z-10 ',
                    'h-full w-full',
                    'bg-gray-700 bg-opacity-50 backdrop-blur-lg'
                )}
            >
                <motion.nav
                    variants={navVariants}
                    initial="hidden"
                    animate="visible"
                    className={cn(
                        'absolute right-0 top-0 z-10',
                        'flex flex-col justify-center gap-8 sm:items-end',
                        'h-full w-3/4 bg-background p-8'
                    )}
                >
                    <Button
                        variant={'outline'}
                        className="absolute right-2 top-4 text-primary hover:bg-primary hover:text-primary-foreground"
                        onClick={onClose}
                    >
                        <X strokeWidth={4} size={42} className="" />
                    </Button>
                    <motion.a
                        href="/"
                        className="mx-auto mb-[15%]"
                        variants={logoVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <img src={'logo_black.png'} className="w-20 " />
                    </motion.a>
                    <ul className="flex w-full flex-col items-end gap-2">
                        {links.map((link) => (
                            <motion.div
                                key={link.name}
                                className="p-4 text-left"
                                variants={item}
                                initial="hidden"
                                animate="visible"
                            >
                                <NavItem
                                    href={link.href}
                                    name={link.name}
                                    className="text-2xl text-accent"
                                />
                            </motion.div>
                        ))}
                        <motion.div
                            className="flex items-center gap-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ ease: easeInOut }}
                        >
                            <ToggleThemeButton />
                            <LanguageSwitcher
                                changeLanguage={changeLanguage}
                                currentLanguage={currentLanguage}
                            />
                        </motion.div>
                    </ul>
                </motion.nav>
            </motion.div>
        </AnimatePresence>
    )
}
