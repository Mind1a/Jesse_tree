import { useTranslation } from "react-i18next"
import styles from "./Educators.module.scss"

const Educators = () => {
  const { t, i18n } = useTranslation()
  const paragraphs = t("educators.paragraphs", { returnObjects: true })

  return (
    <main className={styles.main}>
      {Array.isArray(paragraphs) &&
        paragraphs.map((text, index) => (
          <p key={index} lang={i18n.resolvedLanguage}>
            {text}
          </p>
        ))}
    </main>
  )
}

export default Educators
