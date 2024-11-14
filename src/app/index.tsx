import Header from "@widgets/header"
import { ThemeProvider } from "@widgets/theme-context"
import { FC } from "react"
import { Outlet } from "react-router-dom"

const App: FC = () => (
  <ThemeProvider>
    <div className="bg-body text-gray-100 font-medium w-full h-screen flex flex-col items-center">
      <Header />
      <Outlet />
    </div>
  </ThemeProvider>
)

export default App
