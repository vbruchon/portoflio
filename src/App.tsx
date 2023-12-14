import { Header } from "./components/features/header/Header";
import { Hero } from "./components/features/hero/Hero";
import { ThemeProvider } from "./components/theme/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <Header />
      <body>
        <main className="mx-[5%] md:mx-[10%] xl:mx-[15%]">
          <Hero />
        </main>
      </body>
    </ThemeProvider>
  );
}

export default App;
