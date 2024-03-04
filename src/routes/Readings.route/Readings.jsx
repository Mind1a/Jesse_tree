import { useTranslation } from "react-i18next"
import styles from "./Readings.module.scss"

const Readings = () => {
  const { t } = useTranslation()

  return (
    <main className={styles.main}>
      <h1>{t("jesse_tree_readings.heading")}</h1>
      <p>{t("jesse_tree_readings.text.p1")}</p>
      <p>{t("jesse_tree_readings.text.p2")} </p>
    </main>
  )
}

export default Readings
