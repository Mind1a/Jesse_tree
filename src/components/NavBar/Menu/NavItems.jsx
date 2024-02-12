import { NavLink } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import styles from "./Menu.module.scss"

const NavItems = () => {
  return (
    <>
      <div className={styles.link}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          home
          {/* თავფურცელი */}
        </NavLink>
      </div>
      <div className={styles.link}>
        <HashLink to="/#cards">
          Jesse Tree Readings
          {/* იესეს ხის საკითხავი */}
        </HashLink>
      </div>
      <div className={styles.link}>
        <NavLink
          to="/educators"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          For Educators
          {/* განმანათლებლისათვის */}
        </NavLink>
      </div>
      <div className={styles.link}>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? styles.active : "")}
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
