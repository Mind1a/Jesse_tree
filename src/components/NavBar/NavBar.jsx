import styles from "./NavBar.module.scss"
import { TopMenu } from "./TopMenu"
import { SideMenu } from "./SideMenu"

const NavBar = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <Logo />
          <TopMenu />
          <SideMenu />
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
