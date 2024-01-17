import { AboutSection } from "./components/features/section/aboutSection/AboutSection";
import { Header } from "./components/features/header/Header";
import { Hero } from "./components/features/section/hero/Hero";
import { ProjectSection } from "./components/features/section/project/ProjectSection";
import { Skills } from "./components/features/section/skills/Skills";
import { Testimonial } from "./components/features/section/testimonial/Testimonial";
import { ThemeProvider } from "./components/theme/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <Header />
      <main className="mx-[5%] md:mx-[10%] xl:mx-[15%]">
        <Hero />
        <Skills />
        <ProjectSection />
        <AboutSection />
        <Testimonial />
      </main>
    </ThemeProvider>
  );
}

export default App;
