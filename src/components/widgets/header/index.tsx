import ButtonTheme from "@ui-kit/button-theme"
import { FC } from "react"

const Header: FC = () => (
  <header className="w-full flex justify-center p-2">
    <div className="max-w-screen-lg w-full flex justify-between items-center">
      <h1 className="text-2xl">Vladimir volkov</h1>
      <ButtonTheme />
    </div>
  </header>
)

export default Header
