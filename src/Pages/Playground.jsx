import React from "react";
import { Box } from "@mui/system";
import Layout from "../Components/Layout/Layout";
import CodeEditor from "../Components/Editor/CodeEditor";

const Playground = () => {
  // Editor options
  const [codeTheme, setCodeTheme] = React.useState("vs-dark");
  const [codeFont, setCodeFont] = React.useState("'Fira Code', monospace");

  const handleThemeChange = (event) => {
    setCodeTheme(event.target.value);
  };
  const handleFontFamilyChange = (event) => {
    setCodeFont(event.target.value);
  };

  return (
    <Box>
      <Layout
        themeSelect={codeTheme}
        handleThemeSelect={handleThemeChange}
        codeFont={codeFont}
        handleFontFamilyChange={handleFontFamilyChange}
      >
        <Box sx={{ height: "80vh" }}>
          <CodeEditor theme={codeTheme} fontFamily={codeFont} />
        </Box>
      </Layout>
    </Box>
  );
};

export default Playground;
