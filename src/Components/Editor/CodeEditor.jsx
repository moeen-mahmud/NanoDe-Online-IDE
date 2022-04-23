import React from "react";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import Editor from "@monaco-editor/react";

const CodeEditor = ({ theme, fontFamily, fontSize }) => {
  return (
    <Box>
      <Editor
        options={{
          fontSize: 20,
          fontFamily: fontFamily,
          fontLigatures: "true",
          minimap: { size: "fill" },
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
