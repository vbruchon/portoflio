import { useState } from 'react'
import { Resume } from '../resume/Resume'
import { About } from '../About'
import { SectionButton } from './SectionButton'

export const SectionSelector = () => {
    const [activeSection, setActiveSection] = useState('about')

    const handleSectionChange = (section: string) => {
        setActiveSection(section)
    }

    return (
        <div className="py-2">
            <div className="mx-auto flex items-center justify-center gap-6 md:container">
                <SectionButton
                    section="about"
                    activeSection={activeSection}
                    onClick={handleSectionChange}
                />
                <SectionButton
                    section="resume"
                    activeSection={activeSection}
                    onClick={handleSectionChange}
                />
            </div>
            {activeSection === 'about' ? <About /> : <Resume />}
        </div>
    )
}
