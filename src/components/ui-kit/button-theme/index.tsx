import MoonLogo from "@assets/moon.svg?react"
import SunLogo from "@assets/sun.svg?react"
import ThemeContext from "@widgets/theme-context"
import { FC, useContext } from "react"

import "./style.css"

const ButtonTheme: FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <button
      className="bg-fawn p-2 rounded-lg flex justify-center items-center"
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <MoonLogo className="buttonTheme__icon" />
      ) : (
        <SunLogo className="buttonTheme__icon" />
      )}
    </button>
  )
}

export default ButtonTheme
