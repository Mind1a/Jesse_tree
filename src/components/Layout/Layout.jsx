import { Outlet, useLocation } from "react-router-dom"
import { NavBar } from "../NavBar"
import { Footer } from "../Footer"
import styles from "./Layout.module.scss"

const Layout = () => {
  const { pathname: currentPath } = useLocation()
  const footerPaths = ["/", "/educators", "/about", "/Readings"]

  return (
    <>
      <div className={styles.layout}>
        <div>
          <NavBar />
        </div>
        <div>
          <Outlet />
        </div>
        {footerPaths.includes(currentPath) && (
          <div className={styles.footer}>
            <Footer />
          </div>
        )}
      </div>
    </>
  )
}

export default Layout
