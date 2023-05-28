"use client"

import {
  borelTurquoise,
  darkTurquoise,
  nigthBlue,
  stoneSilver,
} from "@/utils/colors"
import { Avatar, Box, Grid, Group, Image, Title } from "@mantine/core"
import { ArrowDown } from "lucide-react"

export function HeroSectionMobile() {
  return (
    <Box>
      <Group pos="absolute" w="100%" position="right" p="1rem">
        <Avatar
          radius="xl"
          src="https://res.cloudinary.com/dr1k5sqoo/image/upload/v1685302378/Screenshot_227_beqad4.png"
          alt="Thiago"
          size={64}
        />
      </Group>
      <Box
        h="100vh"
        sx={(theme) => ({
          backgroundImage: theme.fn.radialGradient("black", nigthBlue),
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        })}
        p="1rem"
      >
        <Box
          sx={{
            zIndex: 9999,
            // backgroundColor: stoneSilver,
            // opacity: 50,
          }}
        >
          <Title c={stoneSilver} fz={15} ml="0.2rem">
            OI, &#128075; EU SOU O THIAGO
          </Title>
          <Title c={borelTurquoise} fz={50} sx={{ lineHeight: 0.7 }}>
            REACT
          </Title>
          <Title c={borelTurquoise} fz={50} sx={{ lineHeight: 1.1 }}>
            DEVELOPER
          </Title>
          <Group position="apart" noWrap>
            <Box w="35%"></Box>
            <Title c={stoneSilver} fz={10} sx={{ lineHeight: 1 }}>
              Sou um desenvolvedor full stack que gosta de solucionar problemas,{" "}
              <br /> atualmente em busca de uma oportunidade de emprego.
            </Title>
          </Group>
        </Box>
        {/* <Grid
          sx={{
            zIndex: 9999,
          }}
        >
          <Grid.Col span={12}>
            <Title c={stoneSilver} fz={30} ml="0.7rem">
              OI, &#128075; EU SOU O THIAGO
            </Title>
          </Grid.Col>
          <Grid.Col span={12}>
            <Title c={borelTurquoise} fz={150} sx={{ lineHeight: 0.4 }}>
              REACT
            </Title>
            <Title c={borelTurquoise} fz={150} sx={{ lineHeight: 1.1 }}>
              DEVELOPER
            </Title>
          </Grid.Col>
          <Grid.Col span={1}></Grid.Col>
          <Grid.Col span={10}>
            <Title c={stoneSilver} fz={18} mt="-2rem" sx={{ lineHeight: 1 }}>
              Sou um desenvolvedor full stack que gosta de solucionar problemas,{" "}
              <br /> atualmente em busca de uma oportunidade de emprego.
            </Title>
          </Grid.Col>
          <Grid.Col span={1}></Grid.Col>
        </Grid> */}

        <Box
          h="100vh"
          pos="absolute"
          sx={() => ({
            display: "flex",
            flexDirection: "column",
            justifyContent: "end",
            alignItems: "center",
          })}
        >
          <Title c={stoneSilver} fz={18}>
            Veja meus projetos
          </Title>
          <ArrowDown size={100} color={borelTurquoise} />
        </Box>
      </Box>
    </Box>
  )
}
