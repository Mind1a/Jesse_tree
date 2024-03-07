import { Outlet, useLocation } from "react-router-dom"
import { NavBar } from "../NavBar"
import { Footer } from "../Footer"
import styles from "./Layout.module.scss"

const Layout = () => {
  const { pathname: currentPath } = useLocation()
  const footerPaths = ["/", "/educators", "/about", "/readings"]

  return (
    <div className={styles.layout}>
      <div>
        <NavBar />
      </div>
      <div>
        <Outlet />
      </div>
      <div
        className={
          footerPaths.includes(currentPath)
            ? styles.footer
            : styles.footer_story
        }
      >
        <Footer />
      </div>
    </div>
  )
}

export default Layout
