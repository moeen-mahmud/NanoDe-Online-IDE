import React, { useState } from "react";
import { Box } from "@mui/system";
import { Button, Container, Grid, Stack } from "@mui/material";
import { LoadingButton } from "@mui/lab";

// Components
import Layout from "../Components/Layout/Layout";
import CodeEditor from "../Components/Editor/CodeEditor";
import InputBox from "../Components/InputBox/InputBox";
import OutputBox from "../Components/OutputBox/OutputBox";
import CodeInformationBox from "../Components/CodeInformationBox/CodeInformationBox";

// Axios
import axios from "axios";

// Icons
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import LayersClearIcon from "@mui/icons-material/LayersClear";

// Loader
import PrimaryLinearProgress from "../Components/Progress/PrimaryLinearProgress";

// Small utility function for decoding the base64 data
function decodeBase64(str) {
  return decodeURIComponent(window.atob(str));
}

// Main
const Playground = () => {
  // Loading state
  const [isLoading, setIsLoading] = useState(false);

  // Compiling
  const [userCode, setUserCode] = useState(``);
  const [userInput, setUserInput] = useState(``);
  const [codeLanguage, setCodeLanguage] = useState("c");
  const [languageID, setLanguageID] = useState(50);
  const [compilerInfos, setCompilerInfos] = useState({
    executionTime: "",
    executionMemory: "",
    compileOutput: "",
    status: "",
  });

  // Editor options states
  const [codeTheme, setCodeTheme] = useState("vs-dark");
  const [codeFont, setCodeFont] = useState("'Fira Code', monospace");
  const [codeFontSize, setCodeFontSize] = useState(14);

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
    setIsLoading(true);

    // Post the user codes
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
      // Post response data
      const data = response.data;
      console.log(data);

      // Check whether the token is getting
      if (data?.token) {
        try {
          // Request to get the submission
          const submission = await axios.get(
            `https://judge0-ce.p.rapidapi.com/submissions/${data.token}?base64_encoded=true`,
            {
              headers: {
                "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
                "X-RapidAPI-Key": import.meta.env.VITE_JUDGE0_CE_API_KEY,
              },
            }
          );
          // Setting submission data
          const submissionData = submission.data;
          console.log(submissionData);
          // storing submission data
          const submissionStdOut = submissionData?.stdout;
          const submissionExecTime = submissionData?.time;
          const submissionExecMemory = submissionData?.memory;
          const submissionStdErr = submissionData?.stderr;
          const submissionCompileOutput = submissionData?.compile_output;
          const submissionStatus = submissionData?.status?.description;

          if (submissionCompileOutput) {
            // Decoding
            const decodeCompiledOutput = decodeBase64(submissionCompileOutput);

            // setting
            setCompilerInfos({
              compileOutput: decodeCompiledOutput,
              status: submissionStatus,
            });
          } else if (submissionStdErr) {
            // Decoding
            const decodeCompileOutput = decodeBase64(submissionStdErr);

            // setting
            setCompilerInfos({
              compileOutput: decodeCompileOutput,
              status: submissionStatus,
            });
          } else {
            // Decoding
            const decodeStdOutput = decodeBase64(submissionStdOut);

            // setting
            setCompilerInfos({
              compileOutput: decodeStdOutput,
              status: submissionStatus,
              executionTime: submissionExecTime,
              executionMemory: submissionExecMemory,
            });
          }
        } catch (err) {
          console.log("Error", err.message);
        }
      }
    } catch (err) {
      console.log("Error", err.message);
    } finally {
      // Everytime this will render
      // and turn off the loading
      setIsLoading(false);
    }
  };

  // Handle Reset
  const handleReset = (e) => {
    e.preventDefault();

    // Set everything to its default
    setUserCode(``);
    setUserInput(``);
    setCodeLanguage("c");
    setLanguageID(50);
    setCompilerInfos({
      executionMemory: "",
      executionTime: "",
      compileOutput: "",
      status: "",
    });
  };

  return (
    <Box>
      {/* Layout */}
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
        {/* This will render when the api gets called */}
        <PrimaryLinearProgress
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
        <Container>
          <Grid
            container
            columns={{ xs: 1, md: 12 }}
            spacing={{ md: 4 }}
            rowSpacing={{ xs: 2 }}
          >
            <Grid item xs={1} md={8}>
              {/* Code Editor */}
              <CodeEditor
                setUserCode={setUserCode}
                codeLanguage={codeLanguage}
                theme={codeTheme}
                fontFamily={codeFont}
                fontSize={codeFontSize}
              />
            </Grid>
            <Grid item xs={1} md={4}>
              {/* Inputbox */}
              <InputBox userInput={userInput} handleChange={handleUserInput} />

              {/* Information box */}
              <CodeInformationBox
                status={compilerInfos?.status}
                execTime={compilerInfos?.executionTime}
                execMemory={compilerInfos?.executionMemory}
              />
              <Stack
                mt={3}
                direction="column"
                justifyContent="center"
                alignItems="center"
                gap={1.5}
              >
                {isLoading ? (
                  <LoadingButton loading variant="contained" fullWidth>
                    Loading
                  </LoadingButton>
                ) : (
                  <Button
                    disabled={userCode ? false : true}
                    onClick={handleRunCode}
                    variant="contained"
                    color="tertiary"
                    startIcon={<RocketLaunchIcon />}
                    fullWidth
                  >
                    Run
                  </Button>
                )}
                {compilerInfos?.status ? (
                  <Button
                    disabled={userCode ? false : true}
                    onClick={handleReset}
                    variant="contained"
                    color="secondary"
                    startIcon={<LayersClearIcon />}
                    fullWidth
                  >
                    Reset
                  </Button>
                ) : null}
              </Stack>
            </Grid>
          </Grid>
          <Box mt={3}>
            {/* Output box */}
            <OutputBox
              status={compilerInfos?.status}
              outputData={compilerInfos?.compileOutput}
            />
          </Box>
        </Container>
      </Layout>
    </Box>
  );
};

export default Playground;
