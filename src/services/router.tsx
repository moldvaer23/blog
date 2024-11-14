import App from "@app"
import { APP_ROUTES } from "@app-config"
import PageHome from "@pages/home"
import { createHashRouter } from "react-router-dom"

const router = createHashRouter(
  [
    {
      element: <App />,
      children: [
        {
          path: APP_ROUTES.INDEX,
          element: <PageHome />,
        },
      ],
    },
  ],
  {
    basename: "/",
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
)

export default router
