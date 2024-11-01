"use client";

import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { muiTheme } from "@/stitches.config";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
