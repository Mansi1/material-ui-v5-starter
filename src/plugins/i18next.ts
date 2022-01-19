import { use, init } from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { IS_DEVELOPMENT, IS_PRODUCTION, IS_TEST } from "../variables"

export interface TranslationValues {
  [language: string]: {
    [namespace: string]: {
      [key: string]: string
    }
  }
}

export const initI18next = (
  translations: TranslationValues,
  defaultLng: string,
) => {
  use(LanguageDetector)
  use(initReactI18next)
  init({
    fallbackLng: defaultLng,
    debug: IS_DEVELOPMENT,
    nsSeparator: false,
    keySeparator: false,
    resources: translations,
    interpolation: {
      escapeValue: false,
    },
    saveMissing: !IS_PRODUCTION,
    missingKeyHandler: async (
      lngs: readonly string[],
      namespace: string,
      key: string,
    ): Promise<void> => {
      if (IS_TEST) {
        //throw error if translation is missing
        throw Error(
          "Missing translation ns='" + namespace + "' key='" + key + "'",
        )
      }
    },
  })
}
