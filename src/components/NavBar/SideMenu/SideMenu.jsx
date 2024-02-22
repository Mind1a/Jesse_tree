import { useState, useEffect } from "react"
import { NavItems } from "../NavItems"
import OutsideClickHandler from "react-outside-click-handler"
import styles from "./SideMenu.module.scss"

const SideMenu = () => {
  const [toggleSideMenu, setToggleSideMenu] = useState(false)

  const closeSideMenu = () => setToggleSideMenu(false)

  useEffect(() => {
    if (toggleSideMenu) {
      document.body.style.overflow = "hidden"
      document.documentElement.style.scrollbarGutter = "stable"
    } else {
      document.body.style.overflow = "auto"
      document.documentElement.style.scrollbarGutter = "auto"
    }
  }, [toggleSideMenu])

  return (
    <OutsideClickHandler
      onOutsideClick={() => toggleSideMenu && closeSideMenu()}
    >
      <img
        onClick={() => setToggleSideMenu((prev) => !prev)}
        className={`${styles.burger} ${toggleSideMenu && styles.openburger}`}
        src="/assets/icons/burger.svg"
      />
      {toggleSideMenu && (
        <nav className={styles.sideNav}>
          <NavItems closeSideMenu={closeSideMenu} isMobile={true} />
        </nav>
      )}
    </OutsideClickHandler>
  )
}

export default SideMenu
