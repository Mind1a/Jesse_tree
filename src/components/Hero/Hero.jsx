import { Link } from "react-router-dom"
import { useMatchMedia, breakpoint } from "../../hooks"
import { useTranslation } from "react-i18next"
import styles from "./Hero.module.scss"

const Hero = () => {
  const { t, i18n } = useTranslation()
  const isSmallScreen = useMatchMedia(breakpoint.max.medium)

  return (
    <section className={styles.hero}>
      <div className={styles.wrapper} lang={i18n.resolvedLanguage}>
        <div className={styles.imgContainer}>
          <img
            src={
              isSmallScreen
                ? `/assets/icons/${t("hero.img.mobile")}`
                : `/assets/icons/${t("hero.img.desktop")}`
            }
            alt="Advent Reading For The Jesse Tree"
          />
        </div>
        <div className={styles.text} lang={i18n.resolvedLanguage}>
          <p>{t("hero.text.p1")}</p>
          <p>{t("hero.text.p2")}</p>
        </div>
      </div>

      <MoreReadings />

      <div className={styles.scroll}>
        <a href="#cards">
          <img src="/assets/icons/arrow.svg" alt="scroll to stories" />
        </a>
      </div>
    </section>
  )
}

const MoreReadings = () => {
  const { t } = useTranslation()
  return (
    <div className={styles.readingsContainer}>
      <Link to="/readings">
        <div className={styles.readings}>{t("hero.more")}</div>
      </Link>
    </div>
  )
}

export default Hero
