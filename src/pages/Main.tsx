import React, { useCallback } from "react"
import { PageLayout } from "../components/PageLayout"
import logoSrc from "./../assets/img/logo.svg"
import { makeStyles } from "@mui/styles"
import { Stack } from "@mui/material"
import { PlugIcon } from "@mui-extra/icons/PlugIcon"
import { getNsTrans } from "../functions/getNsTrans"
import { useTranslation } from "react-i18next"

const Trans = getNsTrans("main")

const useStyle = makeStyles({
  imageWrapper: {
    textAlign: "center",
  },
  image: {
    animation: "$rotation 3s infinite linear",
  },
  "@keyframes rotation": {
    "100%": { transform: "rotatey(360deg)" },
  },
  languageSwitch: {
    justifyContent: "center",
    marginTop: 30,
  },
  switch: {
    cursor: "pointer",
  },
  spacer: {
    height: 80,
  },
})

export const MainPage = () => {
  const classes = useStyle()
  const { i18n } = useTranslation()
  const changeLanguageClick = useCallback(
    (lng: "en" | "de") => {
      i18n.changeLanguage(lng)
    },
    [i18n],
  )

  return (
    <PageLayout>
      <div className={classes.imageWrapper}>
        <img
          src={logoSrc}
          className={classes.image}
          height={200}
          width={200}
          alt={"material ui logo"}
        />
        <h1>
          <Trans>Material UI v5 starter</Trans>
        </h1>

        <h2>
          <PlugIcon /> <Trans>Used plugins</Trans>
        </h2>
        <Stack spacing={1}>
          <div>
            <a rel="noreferrer" href={"https://mui.com"} target={"_blank"}>
              Material UI (<Trans>core lib</Trans>)
            </a>
          </div>
          <div>
            <a
              rel="noreferrer"
              href={"https://reactrouter.com/docs/en/v6/api"}
              target={"_blank"}
            >
              react-router-dom v6
            </a>
          </div>
          <div>
            <a
              rel="noreferrer"
              href={"https://mansi1.github.io/mdi-react-icons/mui"}
              target={"_blank"}
            >
              @mui-extra/icons (<Trans>icons lib</Trans>)
            </a>
          </div>
          <div>
            <a
              rel="noreferrer"
              href={"https://mansi1.github.io/mdi-react-icons/mui"}
              target={"_blank"}
            >
              i18next (<Trans>translation</Trans>)
            </a>
          </div>
          <div>
            <a
              rel="noreferrer"
              href={"https://www.npmjs.com/package/@milkscout/react"}
              target={"_blank"}
            >
              @milkscout/react (<Trans>utils lib</Trans>)
            </a>
          </div>
        </Stack>
        <Stack spacing={2} direction={"row"} className={classes.languageSwitch}>
          <span
            className={classes.switch}
            onClick={() => changeLanguageClick("en")}
          >
            EN
          </span>
          <span>|</span>
          <span
            className={classes.switch}
            onClick={() => changeLanguageClick("de")}
          >
            DE
          </span>
        </Stack>
        <div className={classes.spacer} />
      </div>
    </PageLayout>
  )
}
