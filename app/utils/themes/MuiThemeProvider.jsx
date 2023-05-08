"use client";
import { theme } from "./MUI";
import { ThemeProvider } from "@mui/material/styles";

export default function MuiTheme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
