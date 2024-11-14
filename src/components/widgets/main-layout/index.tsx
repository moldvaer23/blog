import classNames from "classnames"
import { FC, ReactNode } from "react"

type Props = {
  children: ReactNode | ReactNode[]
  className?: string
}

const MainLayout: FC<Props> = ({ children, className }) => (
  <main
    className={classNames(
      "max-w-sm w-full h-full flex flex-col gap-5 items-center",
      {
        [`${className}`]: className,
      }
    )}
  >
    {children}
  </main>
)

export default MainLayout
