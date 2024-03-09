import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import styles from "./NotFound.module.scss"

const NotFound = () => {
  const { t } = useTranslation()

  return (
    <main className={styles.main}>
      <p>404</p>
      <p>{t("not_found.message")}</p>
      <Link to="/">{t("not_found.link")}</Link>
    </main>
  )
}

export default NotFound
