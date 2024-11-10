import type {} from "@mui/lab/themeAugmentation";
import { createTheme } from "@mui/material";
import { ThemeOptions } from "@mui/material/styles";
import { createBreakpoints } from "@mui/system";

declare module "@mui/material/styles/createTypography" {
  interface TypographyOptions {
    h1Large: TypographyStyleOptions;
  }
  interface Typography {
    h1Large: TypographyStyleOptions;
  }
}

const spacing = (factor: number) => `${0.5 * factor}rem`;
const borderRadius = 4;
const navBarHeightXs = 3.5; //rem
const navBarHeightSmUp = 4; //rem

const breakpoints = createBreakpoints({});

declare module "@mui/material/styles" {
  interface Shape {
    borderRadius: number;
    navPaddingSmUp: string;
    navPaddingXs: string;
  }

  interface Theme {
    shape: Shape;
  }

  interface ThemeOptions {
    shape?: Partial<Shape>;
  }
}

const themeOptions: ThemeOptions = {
  breakpoints,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        a: {
          textDecoration: "none",
          color: "inherit",
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          "&.Mui-focused": { color: "inherit" },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          fontSize: "1rem",
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiLink: {
      defaultProps: {
        variant: "body1",
      },
    },
    MuiListItem: {
      styleOverrides: { gutters: { paddingLeft: 0, paddingRight: 0 } },
    },
    MuiTabPanel: {
      styleOverrides: {
        root: {
          padding: 0,
          paddingTop: spacing(1),
        },
      },
    },
  },
  palette: {
    background: {
      default: "#fcfcfc",
      paper: "#fff",
    },
    common: {
      black: "#313539",
      white: "#fcfcfc",
    },
    error: {
      main: "#ff0000",
    },
    primary: {
      dark: "#20686c",
      light: "#6bc4a6",
      main: "#00a398",
    },
    secondary: {
      dark: "#fe5e01",
      light: "#fe982a",
      main: "#e47701",
    },
    success: {
      main: "#1ac302",
    },
    grey: {
      50: "#f3f3f3",
      100: "#aaafb4",
      200: "#e9e9e9",
      600: "#767676",
    },
    text: {
      primary: "#313539",
      secondary: "#767676",
    },
  },
  shape: {
    borderRadius,
    navPaddingSmUp: `${navBarHeightSmUp}rem`,
    navPaddingXs: `${navBarHeightXs}rem`,
  },
  spacing: spacing,
  typography: {
    allVariants: {
      lineHeight: 1.5,
    },
    body1: {
      fontSize: "1rem", //16px
    },
    body2: {
      fontSize: "0.75rem", //12px
    },
    button: {
      fontSize: "0.875rem", //14px
      textTransform: "none", //don't capitalize
    },
    caption: {
      fontSize: "0.625rem", //10px
    },
    fontFamily: "Ubuntu, sans-serif",
    h1: {
      fontSize: "1.25rem", //20px
      fontWeight: "bold",
      [breakpoints.up("md")]: {
        fontSize: "1.5rem", //24px
      },
    },
    h1Large: {
      fontSize: "1.5rem", //24px
      [breakpoints.up("md")]: {
        fontSize: "75rem", //28px
      },
    },
    h2: {
      fontSize: "1rem", //16px
      fontWeight: "bold",
      [breakpoints.up("md")]: {
        fontSize: "1.25rem", //20px
      },
    },
    h3: {
      fontSize: "0.875rem", //14px
      fontWeight: "bold",
      [breakpoints.up("md")]: {
        fontSize: "1rem", //16px
      },
    },
    h4: {
      fontSize: "0.75rem", //12px
      fontWeight: "bold",
      [breakpoints.up("md")]: {
        fontSize: "0.875rem", //14px
      },
    },
    h5: {
      fontSize: "0.75rem", //12px
      fontWeight: "bold",
      [breakpoints.up("md")]: {
        fontSize: "0.875rem", //14px
      },
    },
    h6: {
      fontSize: "0.75rem", //12px
      fontWeight: "bold",
      [breakpoints.up("md")]: {
        fontSize: "0.875rem", //14px
      },
    },
    overline: {
      fontSize: "0.875rem", //14px
      fontStyle: "italic",
      [breakpoints.up("md")]: {
        fontSize: "1rem", //14px
      },
    },
    subtitle1: {
      fontSize: "1rem", //16px
    },
  },
};

export const theme = createTheme(themeOptions);
