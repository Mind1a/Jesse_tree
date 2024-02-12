import { useState } from "react"
import NavItems from "./NavItems"
import styles from "./Menu.module.scss"

const SideMenu = () => {
  const [toggleSideMenu, setToggleSideMenu] = useState(false)

  return (
    <>
      <img
        onClick={() => setToggleSideMenu((prev) => !prev)}
        className={`${styles.burger} ${toggleSideMenu && styles.openburger}`}
        src="/assets/icons/burger.svg"
      />
      {toggleSideMenu && (
        <nav className={styles.sideNav}>
          <NavItems />
        </nav>
      )}
    </>
  )
}

export default SideMenu
