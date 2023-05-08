"use client";
import { createTheme } from "@mui/material/styles";

export let theme = createTheme({
  components: {
    MuiFormControl: {
      styleOverrides: {
        root: {
          width: "100%",
        },
      },
    },
  },
});
