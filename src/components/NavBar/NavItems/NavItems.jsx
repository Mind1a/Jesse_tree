import { NavLink } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import styles from "./NavItems.module.scss"

const NavItems = ({ closeSideMenu, isMobile }) => {
  return (
    <>
      <div className={isMobile ? styles.mobileLink : styles.link}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.active : "")}
          onClick={closeSideMenu}
        >
          home
          {/* თავფურცელი */}
        </NavLink>
      </div>
      <div className={isMobile ? styles.mobileLink : styles.link}>
        <HashLink to="/#cards" onClick={closeSideMenu}>
          Jesse Tree Readings
          {/* იესეს ხის საკითხავი */}
        </HashLink>
      </div>
      <div className={isMobile ? styles.mobileLink : styles.link}>
        <NavLink
          to="/educators"
          className={({ isActive }) => (isActive ? styles.active : "")}
          onClick={closeSideMenu}
        >
          For Educators
          {/* განმანათლებლისათვის */}
        </NavLink>
      </div>
      <div className={isMobile ? styles.mobileLink : styles.link}>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? styles.active : "")}
          onClick={closeSideMenu}
        >
          About
          {/* პროექტის შესახებ */}
        </NavLink>
      </div>
      <Lang isMobile={isMobile} />
    </>
  )
}

const Lang = ({ isMobile }) => {
  return (
    <button className={isMobile ? styles.mobileLang : styles.lang}>GE</button>
  )
}

export default NavItems
