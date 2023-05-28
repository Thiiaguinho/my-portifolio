"use client"

import { borelTurquoise, nigthBlue, stoneSilver } from "@/utils/colors"
import { Avatar, Box, Group, Title } from "@mantine/core"
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
        h="100dvh"
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

        <Box
          h="100dvh"
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
