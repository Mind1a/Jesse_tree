import NavItems from "./NavItems"
import styles from "./Menu.module.scss"

const TopMenu = () => {
  return (
    <nav className={styles.nav}>
      <NavItems />
    </nav>
  )
}

export default TopMenu
