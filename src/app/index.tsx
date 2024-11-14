import router from "@services/router"
import { FC } from "react"
import { RouterProvider } from "react-router-dom"

const App: FC = () => <RouterProvider router={router} />

export default App
