import React, { useState } from "react";
import { Box } from "@mui/system";
import Layout from "../Components/Layout/Layout";
import CodeEditor from "../Components/Editor/CodeEditor";

const Playground = () => {
  // Editor options
  const [codeLanguage, setCodeLanguage] = useState("c");
  const [codeTheme, setCodeTheme] = React.useState("vs-dark");
  const [codeFont, setCodeFont] = React.useState("'Fira Code', monospace");
  const [codeFontSize, setCodeFontSize] = React.useState(18);

  const handleLanguageChange = (event) => {
    setCodeLanguage(event.target.value);
  };
  const handleThemeChange = (event) => {
    setCodeTheme(event.target.value);
  };
  const handleFontFamilyChange = (event) => {
    setCodeFont(event.target.value);
  };
  const handleChangeFontSize = (event) => {
    setCodeFontSize(event.target.value);
  };

  return (
    <Box>
      <Layout
        codeLanguage={codeLanguage}
        handleLanguageChange={handleLanguageChange}
        themeSelect={codeTheme}
        handleThemeSelect={handleThemeChange}
        codeFont={codeFont}
        handleFontFamilyChange={handleFontFamilyChange}
        codeFontSize={codeFontSize}
        handleChangeFontSize={handleChangeFontSize}
      >
        <Box sx={{ height: "80vh" }}>
          <CodeEditor
            codeLanguage={codeLanguage}
            theme={codeTheme}
            fontFamily={codeFont}
            fontSize={codeFontSize}
          />
        </Box>
      </Layout>
    </Box>
  );
};

export default Playground;
