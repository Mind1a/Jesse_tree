import { useState } from "react"
import { NavLink } from "react-router-dom"
import { useTranslation } from "react-i18next"
import styles from "./NavItems.module.scss"

const NavItems = ({ closeSideMenu, isMobile }) => {
  const { t, i18n } = useTranslation()
  const routes = ["/", "readings", "educators", "about"]

  return (
    <>
      {t("navigation.links", { returnObjects: true }).map((link, i) => (
        <div
          key={link}
          className={isMobile ? styles.mobileLink : styles.link}
          lang={i18n.resolvedLanguage}
        >
          <NavLink
            to={routes[i]}
            className={({ isActive }) => (isActive ? styles.active : "")}
            onClick={closeSideMenu}
          >
            {link}
          </NavLink>
        </div>
      ))}
      <Lang isMobile={isMobile} />
    </>
  )
}

const Lang = ({ isMobile }) => {
  const { i18n } = useTranslation()
  const [activeLang, setActiveLang] = useState(i18n.resolvedLanguage)

  const switchToLang = activeLang === "en" ? "ka" : "en"

  const handleLanguageChange = () => {
    setActiveLang(switchToLang)
    i18n.changeLanguage(switchToLang)
  }

  return (
    <button
      className={isMobile ? styles.mobileLang : styles.lang}
      onClick={handleLanguageChange}
    >
      {switchToLang === "en" ? "EN" : "GE"}
    </button>
  )
}

export default NavItems
