import { useTranslation } from "react-i18next"
import styles from "./About.module.scss"

const About = () => {
  const { t, i18n } = useTranslation()

  return (
    <main className={styles.main}>
      <p lang={i18n.resolvedLanguage}>{t("about.text")}</p>
    </main>
  )
}

export default About
