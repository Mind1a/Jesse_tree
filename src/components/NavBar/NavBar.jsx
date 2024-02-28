import { Link } from "react-router-dom"
import { SideMenu } from "./SideMenu"
import { NavItems } from "./NavItems"
import { useMatchMedia, breakpoint } from "../../hooks"
import styles from "./NavBar.module.scss"

const NavBar = () => {
  const isSmallScreen = useMatchMedia(breakpoint.max.medium)

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Logo />
          {isSmallScreen ? <SideMenu /> : <NavItems isMobile={false} />}
        </nav>
      </header>
    </>
  )
}

const Logo = () => {
  return (
    <Link to="/">
      <img
        className={styles.logo}
        src="/assets/icons/logo.svg"
        alt="Star of Bethlehem"
      />
    </Link>
  )
}

export default NavBar
