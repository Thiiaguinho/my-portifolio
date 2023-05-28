import RootStyleRegistry from "./emotion"

import { cookies } from "next/headers"

export const metadata = {
  title: "Thiago Messias",
  description: "Portfólio de Thiago Messias",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = cookies()
  const themeColor =
    cookieStore.get("mantine-color-scheme")?.value === "dark" ? "dark" : "light"

  return (
    <html lang="pt-BR" suppressHydrationWarning={true}>
      <head />
      <body>
        <RootStyleRegistry themeColor={themeColor}>
          {children}
        </RootStyleRegistry>
      </body>
    </html>
  )
}
