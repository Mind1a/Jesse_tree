import { TopMenu } from "./TopMenu"
import { SideMenu } from "./SideMenu"
import { useMatchMedia, breakpoint } from "../../hooks"
import styles from "./NavBar.module.scss"

const NavBar = () => {
  const isSmallScreen = useMatchMedia(breakpoint.max.medium)

  return (
    <>
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <Logo />
          {isSmallScreen ? <SideMenu /> : <TopMenu />}
        </div>
      </header>
    </>
  )
}

const Logo = () => {
  return (
    <div>
      <img className={styles.logo} src="/assets/icons/logo.svg" />
    </div>
  )
}

export default NavBar
