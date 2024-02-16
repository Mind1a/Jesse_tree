import { NavItems } from "../NavItems"
import styles from "./TopMenu.module.scss"

const TopMenu = () => {
  return (
    <nav className={styles.nav}>
      <NavItems isMobile={false} />
    </nav>
  )
}

export default TopMenu
