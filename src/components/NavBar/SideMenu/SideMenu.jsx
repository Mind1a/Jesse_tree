import { useState, useEffect } from "react"
import { NavItems } from "../NavItems"
import OutsideClickHandler from "react-outside-click-handler"
import styles from "./SideMenu.module.scss"
import { AnimatePresence, motion } from "framer-motion"

const sideMenuVariants = {
  hidden: { x: "100%", opacity: 0 },
  visible: {
    x: "0%",
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    x: "100%",
    opacity: 0,
    transition: { duration: 0.2, ease: "easeIn" },
  },
}

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
        alt="menu"
        onClick={() => setToggleSideMenu((prev) => !prev)}
        className={`${styles.burger} ${toggleSideMenu && styles.openburger}`}
        src="/assets/icons/burger.svg"
      />
      <AnimatePresence>
        {toggleSideMenu && (
          <motion.div
            variants={sideMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={styles.sideNav}
          >
            <NavItems closeSideMenu={closeSideMenu} isMobile={true} />
          </motion.div>
        )}
      </AnimatePresence>
    </OutsideClickHandler>
  )
}

export default SideMenu
