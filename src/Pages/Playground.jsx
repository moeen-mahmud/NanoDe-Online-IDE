import React, { useState } from "react";
import { Box } from "@mui/system";
import Layout from "../Components/Layout/Layout";
import CodeEditor from "../Components/Editor/CodeEditor";
import { Grid } from "@mui/material";
import InputBox from "../Components/InputBox/InputBox";

const Playground = () => {
  const [userCode, setUserCode] = useState(``);

  // Editor options states
  const [codeLanguage, setCodeLanguage] = useState("c");
  const [languageID, setLanguageID] = useState(50);

  const [codeTheme, setCodeTheme] = React.useState("vs-dark");
  const [codeFont, setCodeFont] = React.useState("'Fira Code', monospace");
  const [codeFontSize, setCodeFontSize] = React.useState(18);

  // Event handlers
  const handleLanguageChange = (event) => {
    setCodeLanguage(event.target.value);
  };
  const handleLanguageID = (value) => {
    setLanguageID(value);
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

  console.log(languageID);

  return (
    <Box>
      <Layout
        codeLanguage={codeLanguage}
        handleLanguageChange={handleLanguageChange}
        handleLanguageID={handleLanguageID}
        themeSelect={codeTheme}
        handleThemeSelect={handleThemeChange}
        codeFont={codeFont}
        handleFontFamilyChange={handleFontFamilyChange}
        codeFontSize={codeFontSize}
        handleChangeFontSize={handleChangeFontSize}
      >
        <Box sx={{ minHeight: "80vh" }}>
          <Grid container columns={{ xs: 1, md: 12 }} spacing={{ md: 4 }}>
            <Grid item xs={1} md={8}>
              <CodeEditor
                setUserCode={setUserCode}
                codeLanguage={codeLanguage}
                theme={codeTheme}
                fontFamily={codeFont}
                fontSize={codeFontSize}
              />
            </Grid>
            <Grid item xs={1} md={4}>
              <InputBox />
            </Grid>
          </Grid>
        </Box>
      </Layout>
    </Box>
  );
};

export default Playground;
