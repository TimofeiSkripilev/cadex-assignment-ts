import { createStitches } from "@stitches/react";
import { createTheme as createMuiTheme } from "@mui/material";

// Define shared tokens that both Stitches and MUI will use
const tokens = {
  colors: {
    // Main colors
    primary: "#6366F1", // Indigo
    primaryLight: "#818CF8",
    primaryDark: "#4F46E5",
    secondary: "#EC4899", // Pink
    secondaryLight: "#F472B6",
    secondaryDark: "#DB2777",
    // Background colors
    background: "#0F172A", // Dark blue
    surface: "#1E293B",
    surfaceAlt: "#334155",
    // Text colors
    text: "#F8FAFC", // Almost white
    textLight: "#CBD5E1",
    textInverse: "#0F172A", // Dark for contrast on light backgrounds
    // Accent colors
    accent: "#F59E0B", // Amber
    success: "#10B981", // Emerald
    error: "#EF4444", // Red
    warning: "#F59E0B", // Amber
    info: "#3B82F6", // Blue
  },
  space: {
    1: "4px",
    2: "8px",
    3: "16px",
    4: "24px",
    5: "32px",
    6: "48px",
    7: "64px",
    8: "96px",
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
  },
  fonts: {
    system:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  radii: {
    sm: "0.375rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem",
    round: "9999px",
  },
  shadows: {
    sm: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    md: "0 4px 6px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.06)",
    lg: "0 10px 15px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05)",
    xl: "0 20px 25px rgba(0,0,0,0.1), 0 10px 10px rgba(0,0,0,0.04)",
  },
  transitions: {
    default: "all 0.2s ease",
    slow: "all 0.2s ease-in-out",
    bounce: "all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
  },
  sizes: {
    maxWidth: "1200px",
    formWidth: "600px",
    headerHeight: "64px",
    footerHeight: "64px",
    heroMinHeight: "600px",
    cardMinHeight: "200px",
    formMinHeight: "500px",
  },
  aspectRatios: {
    video: "16/9",
  },
} as const;

// Create Stitches theme
export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    ...tokens,
  },
  media: {
    sm: "(min-width: 640px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)",
    xl: "(min-width: 1280px)",
  },
  utils: {
    marginX: (value: string) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: (value: string) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    paddingX: (value: string) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (value: string) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    aspectRatio: (value: string) => ({
      aspectRatio: value,
    }),
    minSize: (value: string) => ({
      minWidth: value,
      minHeight: value,
    }),
  },
});

// Create MUI theme using the same tokens
export const muiTheme = createMuiTheme({
  palette: {
    primary: {
      main: tokens.colors.primary,
      light: tokens.colors.primaryLight,
      dark: tokens.colors.primaryDark,
    },
    secondary: {
      main: tokens.colors.secondary,
      light: tokens.colors.secondaryLight,
      dark: tokens.colors.secondaryDark,
    },
    background: {
      default: tokens.colors.background,
      paper: tokens.colors.surface,
    },
    text: {
      primary: tokens.colors.text,
      secondary: tokens.colors.textLight,
    },
  },
  shape: {
    borderRadius: parseInt(tokens.radii.md),
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            transition: tokens.transitions.default,
            borderRadius: tokens.radii.md,
            "&:hover": {
              transform: "translateY(-1px)",
            },
            "&.Mui-focused": {
              transform: "translateY(-1px)",
              boxShadow: tokens.shadows.sm,
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: tokens.radii.md,
          transition: tokens.transitions.default,
          padding: `${tokens.space[2]} ${tokens.space[4]}`,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: tokens.radii.lg,
        },
      },
    },
  },
});

export const fadeIn = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});


// In stitches.config.ts, update the globalStyles
export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  "html, body": {
    overflowX: "hidden",
    backgroundColor: "$background",
    color: "$text",
    fontFamily: "$system",
    minHeight: "100vh",
    position: "relative",
  },
  body: {
    opacity: 1,
    transition: "opacity 0.2s ease-in",
  },
  ".fade-in": {
    animation: `${fadeIn} 0.2s ease-in forwards`,
  },
});

export type Tokens = typeof tokens;
