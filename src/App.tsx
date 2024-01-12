import { Header } from "./components/features/header/Header";
import { Hero } from "./components/features/hero/Hero";
import { MiniNav } from "./components/features/mininav/MiniNav";
import { ProjectSection } from "./components/features/project/ProjectSection";
import { Skills } from "./components/features/skills/Skills";
import { Testimonial } from "./components/features/testimonial/Testimonial";
import { ThemeProvider } from "./components/theme/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <Header />
      <main className="mx-[5%] md:mx-[10%] xl:mx-[15%]">
        <Hero />
        <MiniNav />
        <Skills />
        <ProjectSection />
        {/* <Testimonial /> */}
      </main>
    </ThemeProvider>
  );
}

export default App;
