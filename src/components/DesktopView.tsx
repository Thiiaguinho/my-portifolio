"use client"

import { Box, createStyles } from "@mantine/core"
import { HeroSection } from "./HeroSection"

const useStyles = createStyles((theme) => ({
  hiddenMobile: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
    maxWidth: theme.breakpoints.xl,
  },

  hiddenDesktop: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
}))

export function DesktopView() {
  const { classes } = useStyles()

  return (
    <Box className={classes.hiddenMobile}>
      <HeroSection />
    </Box>
  )
}
