"use client"

import { Box, createStyles } from "@mantine/core"
import { HeroSection } from "./HeroSectionDesktop"
import { Projects } from "./ProjectsSectionDesktop"

const useStyles = createStyles((theme) => ({
  hiddenMobile: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
    maxWidth: theme.breakpoints.xl,
    scrollbarColor: "black",
  },
}))

export function DesktopView() {
  const { classes } = useStyles()

  return (
    <Box className={classes.hiddenMobile}>
      <HeroSection />
      <Projects />
    </Box>
  )
}
