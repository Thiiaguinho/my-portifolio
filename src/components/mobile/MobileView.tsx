"use client"

import { Box, createStyles } from "@mantine/core"
import { HeroSectionMobile } from "./HeroSectionMobile"
import { ProjectsMobile } from "./ProjectsSectionMobile"
const useStyles = createStyles((theme) => ({
  hiddenDesktop: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
}))

export function MobileView() {
  const { classes } = useStyles()

  return (
    <Box className={classes.hiddenDesktop}>
      <HeroSectionMobile />
      <ProjectsMobile />
    </Box>
  )
}
