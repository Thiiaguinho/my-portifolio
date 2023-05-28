import { DesktopView } from "@/components/desktop/DesktopView"
import { MobileView } from "@/components/mobile/MobileView"
import "./global.css"

export default function Home() {
  return (
    <>
      <DesktopView />
      <MobileView />
    </>
  )
}
