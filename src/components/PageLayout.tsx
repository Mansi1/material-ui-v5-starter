import { Container } from "@mui/material"
import React, { PropsWithChildren } from "react"
import { makeStyles } from "@mui/styles"
import { GithubBanner } from "./GithubBanner"

const useStyle = makeStyles({
  root: {
    height: "100vh",
    paddingTop: 24,
    paddingBottom: 24,
  },
})
export const PageLayout = ({ children }: PropsWithChildren<unknown>) => {
  const classes = useStyle()
  return (
    <Container maxWidth={"lg"} className={classes.root}>
      <GithubBanner />
      {children}
    </Container>
  )
}
