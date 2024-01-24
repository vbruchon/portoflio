import { AboutSection } from '@/components/features/section/aboutSection/AboutSection'
import { Contact } from '@/components/features/section/contact/Contact'
import { Hero } from '@/components/features/section/hero/Hero'
import { ProjectSection } from '@/components/features/section/project/ProjectSection'
import { Skills } from '@/components/features/section/skills/Skills'
import { Testimonial } from '@/components/features/section/testimonial/Testimonial'
type PortfolioProps = {
    currentLanguage: string
}

const Portfolio = ({ currentLanguage }: PortfolioProps) => {
    return (
        <>
            <Hero sectionKey={currentLanguage} />
            <Skills />
            <ProjectSection />
            <AboutSection />
            <Testimonial />
            <Contact />
        </>
    )
}

export default Portfolio
