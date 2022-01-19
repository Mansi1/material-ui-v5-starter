import React, { PropsWithChildren } from "react"
import {
  createTheme,
  CssBaseline,
  Theme,
  ThemeProvider as ThemeProviderMat,
} from "@mui/material"
import { getGlobalStyles, themeOptions } from "./themeOptions"
import GlobalStyles from "@mui/material/GlobalStyles"
import { StyledEngineProvider } from "@mui/material/styles"

export const ThemeProvider = ({ children }: PropsWithChildren<unknown>) => {
  const theme: Theme = createTheme(themeOptions)
  return (
    <>
      <CssBaseline />
      <StyledEngineProvider injectFirst>
        <ThemeProviderMat theme={theme}>
          <GlobalStyles styles={getGlobalStyles(theme)} />
          {children}
        </ThemeProviderMat>
      </StyledEngineProvider>
    </>
  )
}
