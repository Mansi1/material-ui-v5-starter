import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"

import { Theme, ThemeOptions } from "@mui/material/styles/createTheme"
import { GlobalProps } from "@emotion/react"

export const themeOptions: ThemeOptions = {
  palette: {
    primary: { main: "#003C91" },
  },
  typography: { fontFamily: "Roboto" },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
        color: "primary",
      },
    },
  },
}

export const getGlobalStyles = (theme: Theme): GlobalProps["styles"] => ({
  a: { color: theme.palette.primary.main, textDecoration: "none" },
  body: { fontFamily: "Roboto", margin: 0, padding: 0 },
  html: { margin: 0, padding: 0 },
})
