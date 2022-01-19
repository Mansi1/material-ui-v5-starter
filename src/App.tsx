import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MainPage } from "./pages/Main"
import { MAIN_ROUTE, NOT_FOUND_ROUTE } from "./routes"
import de from "./assets/i18n/de.json"
import en from "./assets/i18n/en.json"
import { initI18next } from "./plugins/i18next"
import { I18nextProvider, useTranslation } from "react-i18next"
import { ThemeProvider } from "./theme/ThemeProvider"

initI18next(
  {
    de,
    en,
  },
  "en",
)

function App() {
  const { i18n } = useTranslation()

  return (
    <ThemeProvider>
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <Routes>
            <Route path={MAIN_ROUTE} element={<MainPage />} />
            <Route path={NOT_FOUND_ROUTE} element={<MainPage />} />
          </Routes>
        </BrowserRouter>
      </I18nextProvider>
    </ThemeProvider>
  )
}

export default App
