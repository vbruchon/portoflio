import { ThemeProvider } from "./components/theme/ThemeProvider";
import { ToggleThemeButton } from "./components/theme/ThemeToggle";

function App() {
  return (
    <ThemeProvider>
      <div className="text-2xl bg-primary">Salut Michel !</div>
      <ToggleThemeButton />;
    </ThemeProvider>
  );
}

export default App;
