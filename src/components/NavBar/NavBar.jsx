import { NavLink } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import styles from "./NavBar.module.scss"

const NavBar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Logo />
        <NavMenu />
        <Lang />
      </div>
    </header>
  )
}

export default NavBar

const Logo = () => {
  return <img className={styles.logo} src="/assets/icons/logo.svg" />
}

const NavMenu = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.link}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          home
        </NavLink>
      </div>
      <div className={styles.link}>
        <HashLink to="/#cards">Jesse Tree Readings</HashLink>
      </div>
      <div className={styles.link}>
        <NavLink
          to="/educators"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          For Educators
        </NavLink>
      </div>
      <div className={styles.link}>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          About
        </NavLink>
      </div>
    </nav>
  )
}

const Lang = () => {
  return <button className={styles.lang}>GE</button>
}
