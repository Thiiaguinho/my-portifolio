"use client"

import {
  Accordion,
  Box,
  Divider,
  Group,
  List,
  Stack,
  Text,
} from "@mantine/core"

import { borelTurquoise, nigthBlue, stoneSilver } from "@/utils/colors"
import { useId } from "@mantine/hooks"
import { Cards } from "../desktop/Cards"

interface Author {
  name: string
  image: string
}

type IconName = "react" | "mantine" | "nextjs" | "typescript"

interface Project {
  name: string
  image: string
  link: string
  title: string
  rating: string
  description: string
  author: Author
  stack: IconName[]
  list: string[]
}

export function ProjectsMobile() {
  const icons = {
    react: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            d="M18.6789 15.9759C18.6789 14.5415 17.4796 13.3785 16 13.3785C14.5206 13.3785 13.3211 14.5415 13.3211 15.9759C13.3211 17.4105 14.5206 18.5734 16 18.5734C17.4796 18.5734 18.6789 17.4105 18.6789 15.9759Z"
            fill="#53C1DE"
          ></path>{" "}
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24.7004 11.1537C25.2661 8.92478 25.9772 4.79148 23.4704 3.39016C20.9753 1.99495 17.7284 4.66843 16.0139 6.27318C14.3044 4.68442 10.9663 2.02237 8.46163 3.42814C5.96751 4.82803 6.73664 8.8928 7.3149 11.1357C4.98831 11.7764 1 13.1564 1 15.9759C1 18.7874 4.98416 20.2888 7.29698 20.9289C6.71658 23.1842 5.98596 27.1909 8.48327 28.5877C10.9973 29.9932 14.325 27.3945 16.0554 25.7722C17.7809 27.3864 20.9966 30.0021 23.4922 28.6014C25.9956 27.1963 25.3436 23.1184 24.7653 20.8625C27.0073 20.221 31 18.7523 31 15.9759C31 13.1835 26.9903 11.7923 24.7004 11.1537ZM24.4162 19.667C24.0365 18.5016 23.524 17.2623 22.8971 15.9821C23.4955 14.7321 23.9881 13.5088 24.3572 12.3509C26.0359 12.8228 29.7185 13.9013 29.7185 15.9759C29.7185 18.07 26.1846 19.1587 24.4162 19.667ZM22.85 27.526C20.988 28.571 18.2221 26.0696 16.9478 24.8809C17.7932 23.9844 18.638 22.9422 19.4625 21.7849C20.9129 21.6602 22.283 21.4562 23.5256 21.1777C23.9326 22.7734 24.7202 26.4763 22.85 27.526ZM9.12362 27.5111C7.26143 26.47 8.11258 22.8946 8.53957 21.2333C9.76834 21.4969 11.1286 21.6865 12.5824 21.8008C13.4123 22.9332 14.2816 23.9741 15.1576 24.8857C14.0753 25.9008 10.9945 28.557 9.12362 27.5111ZM2.28149 15.9759C2.28149 13.874 5.94207 12.8033 7.65904 12.3326C8.03451 13.5165 8.52695 14.7544 9.12123 16.0062C8.51925 17.2766 8.01977 18.5341 7.64085 19.732C6.00369 19.2776 2.28149 18.0791 2.28149 15.9759ZM9.1037 4.50354C10.9735 3.45416 13.8747 6.00983 15.1159 7.16013C14.2444 8.06754 13.3831 9.1006 12.5603 10.2265C11.1494 10.3533 9.79875 10.5569 8.55709 10.8297C8.09125 9.02071 7.23592 5.55179 9.1037 4.50354ZM20.3793 11.5771C21.3365 11.6942 22.2536 11.85 23.1147 12.0406C22.8562 12.844 22.534 13.6841 22.1545 14.5453C21.6044 13.5333 21.0139 12.5416 20.3793 11.5771ZM16.0143 8.0481C16.6054 8.66897 17.1974 9.3623 17.7798 10.1145C16.5985 10.0603 15.4153 10.0601 14.234 10.1137C14.8169 9.36848 15.414 8.67618 16.0143 8.0481ZM9.8565 14.5444C9.48329 13.6862 9.16398 12.8424 8.90322 12.0275C9.75918 11.8418 10.672 11.69 11.623 11.5748C10.9866 12.5372 10.3971 13.5285 9.8565 14.5444ZM11.6503 20.4657C10.6679 20.3594 9.74126 20.2153 8.88556 20.0347C9.15044 19.2055 9.47678 18.3435 9.85796 17.4668C10.406 18.4933 11.0045 19.4942 11.6503 20.4657ZM16.0498 23.9915C15.4424 23.356 14.8365 22.6531 14.2448 21.8971C15.4328 21.9423 16.6231 21.9424 17.811 21.891C17.2268 22.6608 16.6369 23.3647 16.0498 23.9915ZM22.1667 17.4222C22.5677 18.3084 22.9057 19.1657 23.1742 19.9809C22.3043 20.1734 21.3652 20.3284 20.3757 20.4435C21.015 19.4607 21.6149 18.4536 22.1667 17.4222ZM18.7473 20.5941C16.9301 20.72 15.1016 20.7186 13.2838 20.6044C12.2509 19.1415 11.3314 17.603 10.5377 16.0058C11.3276 14.4119 12.2404 12.8764 13.2684 11.4158C15.0875 11.2825 16.9178 11.2821 18.7369 11.4166C19.7561 12.8771 20.6675 14.4086 21.4757 15.9881C20.6771 17.5812 19.7595 19.1198 18.7473 20.5941ZM22.8303 4.4666C24.7006 5.51254 23.8681 9.22726 23.4595 10.8426C22.2149 10.5641 20.8633 10.3569 19.4483 10.2281C18.6239 9.09004 17.7698 8.05518 16.9124 7.15949C18.1695 5.98441 20.9781 3.43089 22.8303 4.4666Z"
            fill="#53C1DE"
          ></path>{" "}
        </g>
      </svg>
    ),
    mantine: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 163 163">
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
          fillRule="evenodd"
          d="M56.236 79.391a9.342 9.342 0 01.632-3.608 9.262 9.262 0 011.967-3.077 9.143 9.143 0 012.994-2.063 9.06 9.06 0 017.103 0 9.145 9.145 0 012.995 2.063 9.262 9.262 0 011.967 3.077 9.339 9.339 0 01-2.125 10.003 9.094 9.094 0 01-6.388 2.63 9.094 9.094 0 01-6.39-2.63 9.3 9.3 0 01-2.755-6.395z"
          clipRule="evenodd"
        />
      </svg>
    ),
    nextjs: (
      <svg
        fill="#ffffff"
        width="38px"
        height="38px"
        viewBox="-2.24 -2.24 36.48 36.48"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#ffffff"
        transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)"
        strokeWidth="0.00032"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path d="M23.749 30.005c-0.119 0.063-0.109 0.083 0.005 0.025 0.037-0.015 0.068-0.036 0.095-0.061 0-0.021 0-0.021-0.1 0.036zM23.989 29.875c-0.057 0.047-0.057 0.047 0.011 0.016 0.036-0.021 0.068-0.041 0.068-0.047 0-0.027-0.016-0.021-0.079 0.031zM24.145 29.781c-0.057 0.047-0.057 0.047 0.011 0.016 0.037-0.021 0.068-0.043 0.068-0.048 0-0.025-0.016-0.020-0.079 0.032zM24.303 29.688c-0.057 0.047-0.057 0.047 0.009 0.015 0.037-0.020 0.068-0.041 0.068-0.047 0-0.025-0.016-0.020-0.077 0.032zM24.516 29.547c-0.109 0.073-0.147 0.12-0.047 0.068 0.067-0.041 0.181-0.131 0.161-0.131-0.043 0.016-0.079 0.043-0.115 0.063zM14.953 0.011c-0.073 0.005-0.292 0.025-0.484 0.041-4.548 0.412-8.803 2.86-11.5 6.631-1.491 2.067-2.459 4.468-2.824 6.989-0.129 0.88-0.145 1.14-0.145 2.333 0 1.192 0.016 1.448 0.145 2.328 0.871 6.011 5.147 11.057 10.943 12.927 1.043 0.333 2.136 0.563 3.381 0.704 0.484 0.052 2.577 0.052 3.061 0 2.152-0.24 3.969-0.771 5.767-1.688 0.276-0.14 0.328-0.177 0.291-0.208-0.88-1.161-1.744-2.323-2.609-3.495l-2.557-3.453-3.203-4.745c-1.068-1.588-2.14-3.172-3.229-4.744-0.011 0-0.025 2.109-0.031 4.681-0.011 4.505-0.011 4.688-0.068 4.792-0.057 0.125-0.151 0.229-0.276 0.287-0.099 0.047-0.188 0.057-0.661 0.057h-0.541l-0.141-0.088c-0.088-0.057-0.161-0.136-0.208-0.229l-0.068-0.141 0.005-6.271 0.011-6.271 0.099-0.125c0.063-0.077 0.141-0.14 0.229-0.187 0.131-0.063 0.183-0.073 0.724-0.073 0.635 0 0.74 0.025 0.907 0.208 1.296 1.932 2.588 3.869 3.859 5.812 2.079 3.152 4.917 7.453 6.312 9.563l2.537 3.839 0.125-0.083c1.219-0.813 2.328-1.781 3.285-2.885 2.016-2.308 3.324-5.147 3.767-8.177 0.129-0.88 0.145-1.141 0.145-2.333 0-1.193-0.016-1.448-0.145-2.328-0.871-6.011-5.147-11.057-10.943-12.928-1.084-0.343-2.199-0.577-3.328-0.697-0.303-0.031-2.371-0.068-2.631-0.041zM21.5 9.688c0.151 0.072 0.265 0.208 0.317 0.364 0.027 0.084 0.032 1.823 0.027 5.74l-0.011 5.624-0.989-1.52-0.995-1.521v-4.083c0-2.647 0.011-4.131 0.025-4.204 0.047-0.167 0.161-0.307 0.313-0.395 0.124-0.063 0.172-0.068 0.667-0.068 0.463 0 0.541 0.005 0.645 0.063z"></path>{" "}
        </g>
      </svg>
    ),
    typescript: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-label="TypeScript"
        role="img"
        viewBox="0 0 512 512"
        fill="#000000"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <rect width="512" height="512" rx="15%" fill="#3178c6"></rect>
          <path
            fill="#ffffff"
            d="m233 284h64v-41H118v41h64v183h51zm84 173c8.1 4.2 18 7.3 29 9.4s23 3.1 35 3.1c12 0 23-1.1 34-3.4c11-2.3 20-6.1 28-11c8.1-5.3 15-12 19-21s7.1-19 7.1-32c0-9.1-1.4-17-4.1-24s-6.6-13-12-18c-5.1-5.3-11-10-18-14s-15-8.2-24-12c-6.6-2.7-12-5.3-18-7.9c-5.2-2.6-9.7-5.2-13-7.8c-3.7-2.7-6.5-5.5-8.5-8.4c-2-3-3-6.3-3-10c0-3.4.89-6.5 2.7-9.3s4.3-5.1 7.5-7.1c3.2-2 7.2-3.5 12-4.6c4.7-1.1 9.9-1.6 16-1.6c4.2 0 8.6.31 13 .94c4.6.63 9.3 1.6 14 2.9c4.7 1.3 9.3 2.9 14 4.9c4.4 2 8.5 4.3 12 6.9v-47c-7.6-2.9-16-5.1-25-6.5s-19-2.1-31-2.1c-12 0-23 1.3-34 3.8s-20 6.5-28 12c-8.1 5.4-14 12-19 21c-4.7 8.4-7 18-7 30c0 15 4.3 28 13 38c8.6 11 22 19 39 27c6.9 2.8 13 5.6 19 8.3s11 5.5 15 8.4c4.3 2.9 7.7 6.1 10 9.5c2.5 3.4 3.8 7.4 3.8 12c0 3.2-.78 6.2-2.3 9s-3.9 5.2-7.1 7.2s-7.1 3.6-12 4.8c-4.7 1.1-10 1.7-17 1.7c-11 0-22-1.9-32-5.7c-11-3.8-21-9.5-28.1-15.44z"
          ></path>
        </g>
      </svg>
    ),
  }

  const projects: Project[] = [
    {
      name: "Minha Mensalidade",
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
      stack: ["react", "mantine", "nextjs", "typescript"],
      list: [
        "Este projeto envolveu a integração com a API do padrão Pix fornecida pelo Banco Sicoob, proporcionando-me uma experiência de aprendizado significativa.",
        "Durante o desenvolvimento deste aplicativo web, enfrentei diversos desafios, especialmente na criação do front-end.",
        "Meu objetivo era não apenas criar uma interface visualmente atraente, mas também garantir uma excelente e intuitiva experiência para o usuário. No back-end, meu foco principal estava na automação.",
        "Busquei desenvolver um sistema que exigisse o mínimo de esforço por parte dos clientes pagantes - tudo o que precisavam fazer era escanear o QR code e efetuar o pagamento.",
        "Da mesma forma, procurei minimizar a configuração necessária para os usuários, tornando o processo o mais simples e eficiente possível.",
        "Esta experiência reforçou minha habilidade de resolver problemas e minha paixão por criar soluções eficazes e centradas no usuário.",
      ],
    },
    {
      name: "Em breve",
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
      stack: [],
      list: [
        "Em 2023 pretendo desenvolver vários projetos para esse portfólio.",
      ],
    },
  ]

  return (
    <Box bg={nigthBlue} p="5%">
      {projects.map((project) => (
        <Stack key={useId()} mb="2rem">
          <Divider
            size="xs"
            mb="1rem"
            color={borelTurquoise}
            label={project.name}
            labelPosition="center"
          />
          <Cards
            image={project.image}
            link={project.link}
            title={project.title}
            description={project.description}
            author={project.author}
            rating={project.rating}
          />
          <Accordion
            variant="contained"
            chevronPosition="right"
            styles={{
              chevron: {
                color: "white",
              },
              item: {
                backgroundColor: nigthBlue,
                "&[data-active]": {
                  backgroundColor: nigthBlue,
                },
              },
              panel: {
                backgroundColor: nigthBlue,
              },
            }}
          >
            <Accordion.Item value={project.name} key={useId()}>
              <Accordion.Control>
                <Group noWrap>
                  {project.stack.map((name) => {
                    const Icon = icons[name]
                    return (
                      <Box w={36} h={36} key={useId()}>
                        {Icon}
                      </Box>
                    )
                  })}
                  <Text c={stoneSilver} ml="1rem">
                    Sobre
                  </Text>
                </Group>
              </Accordion.Control>
              <Accordion.Panel>
                <List size="sm" c={borelTurquoise} p="1rem">
                  {project.list.map((item) => (
                    <List.Item key={useId()}>{item}</List.Item>
                  ))}
                </List>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </Stack>
      ))}
    </Box>
  )
}
