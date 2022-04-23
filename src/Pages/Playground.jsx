import React, { useState } from "react";
import { Box } from "@mui/system";
import Layout from "../Components/Layout/Layout";
import CodeEditor from "../Components/Editor/CodeEditor";
import { Button, Grid, Stack } from "@mui/material";
import InputBox from "../Components/InputBox/InputBox";
import OutputBox from "../Components/OutputBox/OutputBox";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import axios from "axios";

const Playground = () => {
  // Compiling
  const [userCode, setUserCode] = useState(``);
  const [userInput, setUserInput] = useState("");
  const [codeLanguage, setCodeLanguage] = useState("c");
  const [languageID, setLanguageID] = useState(50);
  const [compilerInfos, setCompilerInfos] = useState({
    stdOut: "",
    stdErr: "",
    message: "",
    executionTime: 0.0,
    executionMemory: 0.0,
  });

  // Editor options states
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
  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };

  // Handle Code Run
  const handleRunCode = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://judge0-ce.p.rapidapi.com/submissions",
        {
          language_id: languageID,
          source_code: userCode,
          stdin: userInput,
        },
        {
          headers: {
            "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
            "X-RapidAPI-Key": import.meta.env.VITE_JUDGE0_CE_API_KEY,
          },
        }
      );
      const data = response.data;
      if (data?.token) {
        try {
          const submission = await axios.get(
            `https://judge0-ce.p.rapidapi.com/submissions/${data.token}?base64_encoded=true`,
            {
              headers: {
                "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
                "X-RapidAPI-Key": import.meta.env.VITE_JUDGE0_CE_API_KEY,
              },
            }
          );
          const submissionData = submission.data;
          if (submissionData.stdout) {
            const decryptSubmissionData = atob(submissionData.stdout);
            setCompilerInfos({ stdOut: decryptSubmissionData });
          }
        } catch (err) {
          console.log(err.message);
        }
      }
      console.log(data);
    } catch (err) {
      console.log(err.message);
    }
  };

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
          <Grid
            container
            columns={{ xs: 1, md: 12 }}
            spacing={{ md: 4 }}
            rowSpacing={{ xs: 2 }}
          >
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
              <InputBox userInput={userInput} handleChange={handleUserInput} />
              <Stack
                mt={3}
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Button
                  // disabled={userCode ? false : true}
                  onClick={handleRunCode}
                  variant="contained"
                  color="tertiary"
                  startIcon={<RocketLaunchIcon />}
                  fullWidth
                >
                  Run
                </Button>
              </Stack>
            </Grid>
          </Grid>
          <Box mt={3}>
            <OutputBox outputData={compilerInfos?.stdOut} />
          </Box>
        </Box>
      </Layout>
    </Box>
  );
};

export default Playground;
