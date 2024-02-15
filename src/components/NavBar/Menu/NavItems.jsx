import { NavLink } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import styles from "./Menu.module.scss"

const NavItems = ({ closeSideMenu }) => {
  return (
    <>
      <div className={styles.link}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.active : "")}
          onClick={closeSideMenu}
        >
          home
          {/* თავფურცელი */}
        </NavLink>
      </div>
      <div className={styles.link}>
        <HashLink to="/#cards" onClick={closeSideMenu}>
          Jesse Tree Readings
          {/* იესეს ხის საკითხავი */}
        </HashLink>
      </div>
      <div className={styles.link}>
        <NavLink
          to="/educators"
          className={({ isActive }) => (isActive ? styles.active : "")}
          onClick={closeSideMenu}
        >
          For Educators
          {/* განმანათლებლისათვის */}
        </NavLink>
      </div>
      <div className={styles.link}>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? styles.active : "")}
          onClick={closeSideMenu}
        >
          About
          {/* პროექტის შესახებ */}
        </NavLink>
      </div>
      <Lang />
    </>
  )
}

const Lang = () => {
  return <button className={styles.lang}>GE</button>
}

export default NavItems
