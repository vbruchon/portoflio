import { Header } from "./components/features/header/Header";
import { ThemeProvider } from "./components/theme/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <Header />
    </ThemeProvider>
  );
}

export default App;
