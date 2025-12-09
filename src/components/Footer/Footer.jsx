import { useTranslation } from "react-i18next"
import styles from "./Footer.module.scss"

const Footer = () => {
  const { t } = useTranslation()
  const links = t("footer.links", { returnObjects: true })
  const onlineLink = t("footer.onlineLink")
  const buyLink = t("footer.buyLink")

  return (
    <footer className={styles.footer}>
      <div>
        <a href="/assets/pdf/full/illustrations.pdf" target="_blank">
          {links[0]}
        </a>
        <a href="/assets/pdf/full/colorbook.pdf" target="_blank">
          {links[1]}
        </a>
      </div>
      <div>
        <a href={onlineLink} target="_blank" rel="noopener noreferrer">
          {links[2]}
        </a>
        <a href={buyLink} target="_blank" rel="noopener noreferrer">
          {links[3]}
        </a>
      </div>
    </footer>
  )
}

export default Footer
