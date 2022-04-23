import React from "react";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import Editor from "@monaco-editor/react";

const CodeEditor = ({ codeLanguage, theme, fontFamily, fontSize }) => {
  return (
    <Box>
      <Editor
        language={codeLanguage}
        defaultLanguage="c"
        options={{
          fontSize: fontSize,
          fontFamily: fontFamily,
          fontLigatures: "true",
          minimap: { size: "fit" },
          smoothScrolling: true,
          smartSelect: true,
          wordWrap: "on",
          wordBasedSuggestions: true,
          quickSuggestions: true,
          autoClosingQuotes: "always",
          snippetSuggestions: "bottom",
          suggest: true,
          copyWithSyntaxHighlighting: true,
          cursorBlinking: "expand",
          cursorStyle: "line",
          cursorSmoothCaretAnimation: true,
          cursorWidth: 4,
        }}
        theme={theme}
        height="80vh"
        width="100%"
      />
      <Button
        variant="contained"
        color="tertiary"
        startIcon={<SettingsSuggestIcon />}
      >
        Run
      </Button>
    </Box>
  );
};

export default CodeEditor;
