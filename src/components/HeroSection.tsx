"use client"

import {
  Box,
  Button,
  Center,
  Divider,
  Grid,
  Group,
  Image,
  List,
  Paper,
  Stack,
  Text,
  Title,
  createStyles,
} from "@mantine/core"
import { UilArrowDown, UilReact } from "@iconscout/react-unicons"

import { Cards } from "./Cards"

const borelTurquoise = "#40C1AC"
const darkTurquoise = "#067F72"
const stoneSilver = "#717574"
const nigthBlue = "#07272D"

export function HeroSection() {
  const data = {
    image:
      "https://res.cloudinary.com/dr1k5sqoo/image/upload/v1685257191/Screenshot_223_gta5y1.png",
    link: "https://minha-mensalidade.vercel.app/",
    title: "Minha Mensalidade (Web App)",
    rating: "Em Desenvolvimento",
    description:
      "Estou desenvolvendo um aplicativo de automação para o recebimento de pagamentos recorrentes via Pix, utilizando Next.js.",
    author: {
      name: "Thiago Messias",
      image:
        "https://res.cloudinary.com/dr1k5sqoo/image/upload/v1685257126/Screenshot_221_vkowgg.png",
    },
  }

  const data2 = {
    image:
      "https://res.cloudinary.com/dr1k5sqoo/image/upload/v1685258936/Screenshot_226_c4yoeg.png",
    link: "#",
    title: "Em Breve",
    rating: "Em Desenvolvimento",
    description:
      "Atualmente, estou empenhado na criação de novos projetos, buscando criar soluções eficientes e eficazes para desafios complexos.",
    author: {
      name: "Thiago Messias",
      image:
        "https://res.cloudinary.com/dr1k5sqoo/image/upload/v1685257126/Screenshot_221_vkowgg.png",
    },
  }

  return (
    <Box>
      <Group pos="absolute" w="100%" position="right">
        <Box w={497} h="100vh">
          <Image src="https://res.cloudinary.com/dr1k5sqoo/image/upload/v1685250075/ThiagoPortifolio-v2_ed7e3s.png" />
        </Box>
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
        <Grid
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
        </Grid>
        <Box
          h="100vh"
          pos="absolute"
          sx={(theme) => ({
            display: "flex",
            flexDirection: "column",
            justifyContent: "end",
            alignItems: "center",
          })}
        >
          <Title c={stoneSilver} fz={18}>
            Veja meus projetos
          </Title>
          <UilArrowDown size={100} color={borelTurquoise} />
        </Box>
      </Box>
      {/* How to make this box bellow only load when the user scroon down? */}
      <Box bg={nigthBlue} p="5rem">
        <Grid>
          <Grid.Col span={4}>
            <Cards
              image={data.image}
              link={data.link}
              title={data.title}
              description={data.description}
              author={data.author}
              rating={data.rating}
            />
          </Grid.Col>
          <Grid.Col span={8}>
            <Box h={375}>
              <Group>
                <UilReact size={46} color={borelTurquoise} />
                <Box w={36} h={36}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 163 163"
                  >
                    <path
                      fill="#339AF0"
                      d="M162.162 81.5c0-45.011-36.301-81.5-81.08-81.5C36.301 0 0 36.489 0 81.5 0 126.51 36.301 163 81.081 163s81.081-36.49 81.081-81.5z"
                    />
                    <path
                      fill="#fff"
                      d="M65.983 43.049a6.234 6.234 0 00-.336 6.884 6.14 6.14 0 001.618 1.786c9.444 7.036 14.866 17.794 14.866 29.52 0 11.726-5.422 22.484-14.866 29.52a6.145 6.145 0 00-1.616 1.786 6.21 6.21 0 00-.694 4.693 6.21 6.21 0 001.028 2.186 6.151 6.151 0 006.457 2.319 6.154 6.154 0 002.177-1.035 50.083 50.083 0 007.947-7.39h17.493c3.406 0 6.174-2.772 6.174-6.194s-2.762-6.194-6.174-6.194h-9.655a49.165 49.165 0 004.071-19.69 49.167 49.167 0 00-4.07-19.692h9.66c3.406 0 6.173-2.771 6.173-6.194 0-3.422-2.762-6.193-6.173-6.193H82.574a50.112 50.112 0 00-7.952-7.397 6.15 6.15 0 00-4.578-1.153 6.189 6.189 0 00-4.055 2.438h-.006z"
                    />
                    <path
                      fill="#fff"
                      fill-rule="evenodd"
                      d="M56.236 79.391a9.342 9.342 0 01.632-3.608 9.262 9.262 0 011.967-3.077 9.143 9.143 0 012.994-2.063 9.06 9.06 0 017.103 0 9.145 9.145 0 012.995 2.063 9.262 9.262 0 011.967 3.077 9.339 9.339 0 01-2.125 10.003 9.094 9.094 0 01-6.388 2.63 9.094 9.094 0 01-6.39-2.63 9.3 9.3 0 01-2.755-6.395z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </Box>

                <Box w={36} h={36}>
                  <svg
                    fill="#ffffff"
                    width="38px"
                    height="38px"
                    viewBox="-2.24 -2.24 36.48 36.48"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#ffffff"
                    transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)"
                    stroke-width="0.00032"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path d="M23.749 30.005c-0.119 0.063-0.109 0.083 0.005 0.025 0.037-0.015 0.068-0.036 0.095-0.061 0-0.021 0-0.021-0.1 0.036zM23.989 29.875c-0.057 0.047-0.057 0.047 0.011 0.016 0.036-0.021 0.068-0.041 0.068-0.047 0-0.027-0.016-0.021-0.079 0.031zM24.145 29.781c-0.057 0.047-0.057 0.047 0.011 0.016 0.037-0.021 0.068-0.043 0.068-0.048 0-0.025-0.016-0.020-0.079 0.032zM24.303 29.688c-0.057 0.047-0.057 0.047 0.009 0.015 0.037-0.020 0.068-0.041 0.068-0.047 0-0.025-0.016-0.020-0.077 0.032zM24.516 29.547c-0.109 0.073-0.147 0.12-0.047 0.068 0.067-0.041 0.181-0.131 0.161-0.131-0.043 0.016-0.079 0.043-0.115 0.063zM14.953 0.011c-0.073 0.005-0.292 0.025-0.484 0.041-4.548 0.412-8.803 2.86-11.5 6.631-1.491 2.067-2.459 4.468-2.824 6.989-0.129 0.88-0.145 1.14-0.145 2.333 0 1.192 0.016 1.448 0.145 2.328 0.871 6.011 5.147 11.057 10.943 12.927 1.043 0.333 2.136 0.563 3.381 0.704 0.484 0.052 2.577 0.052 3.061 0 2.152-0.24 3.969-0.771 5.767-1.688 0.276-0.14 0.328-0.177 0.291-0.208-0.88-1.161-1.744-2.323-2.609-3.495l-2.557-3.453-3.203-4.745c-1.068-1.588-2.14-3.172-3.229-4.744-0.011 0-0.025 2.109-0.031 4.681-0.011 4.505-0.011 4.688-0.068 4.792-0.057 0.125-0.151 0.229-0.276 0.287-0.099 0.047-0.188 0.057-0.661 0.057h-0.541l-0.141-0.088c-0.088-0.057-0.161-0.136-0.208-0.229l-0.068-0.141 0.005-6.271 0.011-6.271 0.099-0.125c0.063-0.077 0.141-0.14 0.229-0.187 0.131-0.063 0.183-0.073 0.724-0.073 0.635 0 0.74 0.025 0.907 0.208 1.296 1.932 2.588 3.869 3.859 5.812 2.079 3.152 4.917 7.453 6.312 9.563l2.537 3.839 0.125-0.083c1.219-0.813 2.328-1.781 3.285-2.885 2.016-2.308 3.324-5.147 3.767-8.177 0.129-0.88 0.145-1.141 0.145-2.333 0-1.193-0.016-1.448-0.145-2.328-0.871-6.011-5.147-11.057-10.943-12.928-1.084-0.343-2.199-0.577-3.328-0.697-0.303-0.031-2.371-0.068-2.631-0.041zM21.5 9.688c0.151 0.072 0.265 0.208 0.317 0.364 0.027 0.084 0.032 1.823 0.027 5.74l-0.011 5.624-0.989-1.52-0.995-1.521v-4.083c0-2.647 0.011-4.131 0.025-4.204 0.047-0.167 0.161-0.307 0.313-0.395 0.124-0.063 0.172-0.068 0.667-0.068 0.463 0 0.541 0.005 0.645 0.063z"></path>{" "}
                    </g>
                  </svg>
                </Box>

                <Box w={36} h={36}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="TypeScript"
                    role="img"
                    viewBox="0 0 512 512"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <rect
                        width="512"
                        height="512"
                        rx="15%"
                        fill="#3178c6"
                      ></rect>
                      <path
                        fill="#ffffff"
                        d="m233 284h64v-41H118v41h64v183h51zm84 173c8.1 4.2 18 7.3 29 9.4s23 3.1 35 3.1c12 0 23-1.1 34-3.4c11-2.3 20-6.1 28-11c8.1-5.3 15-12 19-21s7.1-19 7.1-32c0-9.1-1.4-17-4.1-24s-6.6-13-12-18c-5.1-5.3-11-10-18-14s-15-8.2-24-12c-6.6-2.7-12-5.3-18-7.9c-5.2-2.6-9.7-5.2-13-7.8c-3.7-2.7-6.5-5.5-8.5-8.4c-2-3-3-6.3-3-10c0-3.4.89-6.5 2.7-9.3s4.3-5.1 7.5-7.1c3.2-2 7.2-3.5 12-4.6c4.7-1.1 9.9-1.6 16-1.6c4.2 0 8.6.31 13 .94c4.6.63 9.3 1.6 14 2.9c4.7 1.3 9.3 2.9 14 4.9c4.4 2 8.5 4.3 12 6.9v-47c-7.6-2.9-16-5.1-25-6.5s-19-2.1-31-2.1c-12 0-23 1.3-34 3.8s-20 6.5-28 12c-8.1 5.4-14 12-19 21c-4.7 8.4-7 18-7 30c0 15 4.3 28 13 38c8.6 11 22 19 39 27c6.9 2.8 13 5.6 19 8.3s11 5.5 15 8.4c4.3 2.9 7.7 6.1 10 9.5c2.5 3.4 3.8 7.4 3.8 12c0 3.2-.78 6.2-2.3 9s-3.9 5.2-7.1 7.2s-7.1 3.6-12 4.8c-4.7 1.1-10 1.7-17 1.7c-11 0-22-1.9-32-5.7c-11-3.8-21-9.5-28.1-15.44z"
                      ></path>
                    </g>
                  </svg>
                </Box>
              </Group>
              <List size="sm" c={borelTurquoise} p="1rem">
                <List.Item>
                  Este projeto envolveu a integração com a API do padrão Pix
                  fornecida pelo Banco Sicoob, proporcionando-me uma experiência
                  de aprendizado significativa.
                </List.Item>
                <List.Item>
                  Durante o desenvolvimento deste aplicativo web, enfrentei
                  diversos desafios, especialmente na criação do front-end.
                </List.Item>
                <List.Item>
                  Meu objetivo era não apenas criar uma interface visualmente
                  atraente, mas também garantir uma excelente e intuitiva
                  experiência para o usuário. No back-end, meu foco principal
                  estava na automação.
                </List.Item>
                <List.Item>
                  Busquei desenvolver um sistema que exigisse o mínimo de
                  esforço por parte dos clientes pagantes - tudo o que
                  precisavam fazer era escanear o QR code e efetuar o pagamento.
                </List.Item>
                <List.Item>
                  Da mesma forma, procurei minimizar a configuração necessária
                  para os usuários, tornando o processo o mais simples e
                  eficiente possível.
                </List.Item>
                <List.Item>
                  Esta experiência reforçou minha habilidade de resolver
                  problemas e minha paixão por criar soluções eficazes e
                  centradas no usuário.
                </List.Item>
              </List>
            </Box>
          </Grid.Col>
          <Grid.Col span={4}>
            <Cards
              image={data2.image}
              link={data2.link}
              title={data2.title}
              description={data2.description}
              author={data2.author}
              rating={data2.rating}
            />
          </Grid.Col>
          <Grid.Col span={8}>
            <Box h={375}>
              <Group>
                {/* <UilReact size={46} color={borelTurquoise} />
                <Box w={36} h={36}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 163 163"
                  >
                    <path
                      fill="#339AF0"
                      d="M162.162 81.5c0-45.011-36.301-81.5-81.08-81.5C36.301 0 0 36.489 0 81.5 0 126.51 36.301 163 81.081 163s81.081-36.49 81.081-81.5z"
                    />
                    <path
                      fill="#fff"
                      d="M65.983 43.049a6.234 6.234 0 00-.336 6.884 6.14 6.14 0 001.618 1.786c9.444 7.036 14.866 17.794 14.866 29.52 0 11.726-5.422 22.484-14.866 29.52a6.145 6.145 0 00-1.616 1.786 6.21 6.21 0 00-.694 4.693 6.21 6.21 0 001.028 2.186 6.151 6.151 0 006.457 2.319 6.154 6.154 0 002.177-1.035 50.083 50.083 0 007.947-7.39h17.493c3.406 0 6.174-2.772 6.174-6.194s-2.762-6.194-6.174-6.194h-9.655a49.165 49.165 0 004.071-19.69 49.167 49.167 0 00-4.07-19.692h9.66c3.406 0 6.173-2.771 6.173-6.194 0-3.422-2.762-6.193-6.173-6.193H82.574a50.112 50.112 0 00-7.952-7.397 6.15 6.15 0 00-4.578-1.153 6.189 6.189 0 00-4.055 2.438h-.006z"
                    />
                    <path
                      fill="#fff"
                      fill-rule="evenodd"
                      d="M56.236 79.391a9.342 9.342 0 01.632-3.608 9.262 9.262 0 011.967-3.077 9.143 9.143 0 012.994-2.063 9.06 9.06 0 017.103 0 9.145 9.145 0 012.995 2.063 9.262 9.262 0 011.967 3.077 9.339 9.339 0 01-2.125 10.003 9.094 9.094 0 01-6.388 2.63 9.094 9.094 0 01-6.39-2.63 9.3 9.3 0 01-2.755-6.395z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </Box>

                <Box w={36} h={36}>
                  <svg
                    fill="#ffffff"
                    width="38px"
                    height="38px"
                    viewBox="-2.24 -2.24 36.48 36.48"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#ffffff"
                    transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)"
                    stroke-width="0.00032"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path d="M23.749 30.005c-0.119 0.063-0.109 0.083 0.005 0.025 0.037-0.015 0.068-0.036 0.095-0.061 0-0.021 0-0.021-0.1 0.036zM23.989 29.875c-0.057 0.047-0.057 0.047 0.011 0.016 0.036-0.021 0.068-0.041 0.068-0.047 0-0.027-0.016-0.021-0.079 0.031zM24.145 29.781c-0.057 0.047-0.057 0.047 0.011 0.016 0.037-0.021 0.068-0.043 0.068-0.048 0-0.025-0.016-0.020-0.079 0.032zM24.303 29.688c-0.057 0.047-0.057 0.047 0.009 0.015 0.037-0.020 0.068-0.041 0.068-0.047 0-0.025-0.016-0.020-0.077 0.032zM24.516 29.547c-0.109 0.073-0.147 0.12-0.047 0.068 0.067-0.041 0.181-0.131 0.161-0.131-0.043 0.016-0.079 0.043-0.115 0.063zM14.953 0.011c-0.073 0.005-0.292 0.025-0.484 0.041-4.548 0.412-8.803 2.86-11.5 6.631-1.491 2.067-2.459 4.468-2.824 6.989-0.129 0.88-0.145 1.14-0.145 2.333 0 1.192 0.016 1.448 0.145 2.328 0.871 6.011 5.147 11.057 10.943 12.927 1.043 0.333 2.136 0.563 3.381 0.704 0.484 0.052 2.577 0.052 3.061 0 2.152-0.24 3.969-0.771 5.767-1.688 0.276-0.14 0.328-0.177 0.291-0.208-0.88-1.161-1.744-2.323-2.609-3.495l-2.557-3.453-3.203-4.745c-1.068-1.588-2.14-3.172-3.229-4.744-0.011 0-0.025 2.109-0.031 4.681-0.011 4.505-0.011 4.688-0.068 4.792-0.057 0.125-0.151 0.229-0.276 0.287-0.099 0.047-0.188 0.057-0.661 0.057h-0.541l-0.141-0.088c-0.088-0.057-0.161-0.136-0.208-0.229l-0.068-0.141 0.005-6.271 0.011-6.271 0.099-0.125c0.063-0.077 0.141-0.14 0.229-0.187 0.131-0.063 0.183-0.073 0.724-0.073 0.635 0 0.74 0.025 0.907 0.208 1.296 1.932 2.588 3.869 3.859 5.812 2.079 3.152 4.917 7.453 6.312 9.563l2.537 3.839 0.125-0.083c1.219-0.813 2.328-1.781 3.285-2.885 2.016-2.308 3.324-5.147 3.767-8.177 0.129-0.88 0.145-1.141 0.145-2.333 0-1.193-0.016-1.448-0.145-2.328-0.871-6.011-5.147-11.057-10.943-12.928-1.084-0.343-2.199-0.577-3.328-0.697-0.303-0.031-2.371-0.068-2.631-0.041zM21.5 9.688c0.151 0.072 0.265 0.208 0.317 0.364 0.027 0.084 0.032 1.823 0.027 5.74l-0.011 5.624-0.989-1.52-0.995-1.521v-4.083c0-2.647 0.011-4.131 0.025-4.204 0.047-0.167 0.161-0.307 0.313-0.395 0.124-0.063 0.172-0.068 0.667-0.068 0.463 0 0.541 0.005 0.645 0.063z"></path>{" "}
                    </g>
                  </svg>
                </Box>

                <Box w={36} h={36}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="TypeScript"
                    role="img"
                    viewBox="0 0 512 512"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <rect
                        width="512"
                        height="512"
                        rx="15%"
                        fill="#3178c6"
                      ></rect>
                      <path
                        fill="#ffffff"
                        d="m233 284h64v-41H118v41h64v183h51zm84 173c8.1 4.2 18 7.3 29 9.4s23 3.1 35 3.1c12 0 23-1.1 34-3.4c11-2.3 20-6.1 28-11c8.1-5.3 15-12 19-21s7.1-19 7.1-32c0-9.1-1.4-17-4.1-24s-6.6-13-12-18c-5.1-5.3-11-10-18-14s-15-8.2-24-12c-6.6-2.7-12-5.3-18-7.9c-5.2-2.6-9.7-5.2-13-7.8c-3.7-2.7-6.5-5.5-8.5-8.4c-2-3-3-6.3-3-10c0-3.4.89-6.5 2.7-9.3s4.3-5.1 7.5-7.1c3.2-2 7.2-3.5 12-4.6c4.7-1.1 9.9-1.6 16-1.6c4.2 0 8.6.31 13 .94c4.6.63 9.3 1.6 14 2.9c4.7 1.3 9.3 2.9 14 4.9c4.4 2 8.5 4.3 12 6.9v-47c-7.6-2.9-16-5.1-25-6.5s-19-2.1-31-2.1c-12 0-23 1.3-34 3.8s-20 6.5-28 12c-8.1 5.4-14 12-19 21c-4.7 8.4-7 18-7 30c0 15 4.3 28 13 38c8.6 11 22 19 39 27c6.9 2.8 13 5.6 19 8.3s11 5.5 15 8.4c4.3 2.9 7.7 6.1 10 9.5c2.5 3.4 3.8 7.4 3.8 12c0 3.2-.78 6.2-2.3 9s-3.9 5.2-7.1 7.2s-7.1 3.6-12 4.8c-4.7 1.1-10 1.7-17 1.7c-11 0-22-1.9-32-5.7c-11-3.8-21-9.5-28.1-15.44z"
                      ></path>
                    </g>
                  </svg>
                </Box> */}
              </Group>
              <List size="sm" c={borelTurquoise} p="1rem">
                <List.Item>
                  Em 2023 pretendo desenvolver vários projetos para esse
                  portfólio.
                </List.Item>
              </List>
            </Box>
          </Grid.Col>
        </Grid>
      </Box>
    </Box>
  )
}
