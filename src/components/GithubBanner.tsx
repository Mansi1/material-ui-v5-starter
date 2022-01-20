import React from "react"
import forkMeOnGithubUrl from "../assets/img/forkMeOnGithub.svg"
import { makeStyles } from "@mui/styles"
import { openUrlInNewTab } from "@milkscout/react"
import { GITHUB_REPO_URL } from "../variables"

const useStyle = makeStyles({
  root: {
    height: 200,
    position: "fixed",
    right: 0,
    top: 0,
    zIndex: 1,
    cursor: "pointer",
  },
})

export const GithubBanner = () => {
  const classes = useStyle()
  return (
    <>
      <img
        src={forkMeOnGithubUrl}
        className={classes.root}
        onClick={() => openUrlInNewTab(GITHUB_REPO_URL)}
        alt={"Stalk me on GitHub logo"}
      />
    </>
  )
}
