import React from "react";
import { ThemeProvider } from "@mui/material";
import useCustomTheme from "./hooks/useCustomTheme";
import PrimaryCircularProgress from "./Components/Progress/PrimaryCircularProgress";

// Playground
const Playground = React.lazy(() => import("./Pages/Playground"));

function App() {
  const { theme } = useCustomTheme();

  // Added comment
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <React.Suspense fallback={<PrimaryCircularProgress />}>
          <Playground />
        </React.Suspense>
      </div>
    </ThemeProvider>
  );
}

export default App;
