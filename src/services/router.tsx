import { APP_ROUTES } from "@app-config"
import PageIndex from "@pages/index"
import { createHashRouter } from "react-router-dom"

const router = createHashRouter([
  {
    path: APP_ROUTES.INDEX,
    element: <PageIndex />,
  },
])

export default router
