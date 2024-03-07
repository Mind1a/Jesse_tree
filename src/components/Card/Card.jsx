import { useTranslation } from "react-i18next"
import styles from "./Card.module.scss"

const Card = ({ heading, subheading, illustration, card }) => {
  const { i18n } = useTranslation()

  return (
    <div className={styles[card]}>
      <h2 className={styles.heading} lang={i18n.resolvedLanguage}>
        {heading}
      </h2>
      <img className={styles.illustration} src={illustration} alt={heading} />
      <p className={styles.subheading} lang={i18n.resolvedLanguage}>
        {subheading}
      </p>
    </div>
  )
}

export default Card
