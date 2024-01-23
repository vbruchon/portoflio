import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'

const ButtonSection = ({ reverse = false }) => {
    const socialNetworks = [
        {
            name: 'Github',
            link: 'https://github.com/vbruchon',
            icon: <FaGithub size={28} />,
        },
        {
            name: 'Linkedin',
            link: '',
            icon: <FaLinkedin size={28} />,
        },
        {
            name: 'vivian.bruchon@gmail.com',
            link: 'mailto:vivian.bruchon@gmail.com',
            icon: <IoIosMail size={28} />,
        },
    ]

    return (
        <motion.div
            className={`flex flex-wrap justify-center gap-4 md:flex-nowrap md:justify-start ${reverse ? 'flex-row-reverse' : ''}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
        >
            {socialNetworks.map((socialNetwork) => (
                <a
                    key={socialNetwork.name}
                    href={socialNetwork.link}
                    className="flex transform items-center gap-x-2 rounded-2xl bg-accent-foreground p-2 text-lg font-medium text-white transition-transform hover:scale-105"
                >
                    {socialNetwork.icon} {socialNetwork.name}
                </a>
            ))}
        </motion.div>
    )
}

export default ButtonSection
