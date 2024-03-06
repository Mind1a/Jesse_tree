import { DesktopCardsDisplay } from "./DesktopCardsDisplay"
import { MobileCardsDisplay } from "./MobileCardsDisplay"
import { useMatchMedia, breakpoint } from "../../hooks"
import { useTranslation } from "react-i18next"
import styles from "./Cards.module.scss"

const Cards = () => {
  const { t } = useTranslation()
  const isSmallScreen = useMatchMedia(breakpoint.max.small)
  const storiesCategories = t("storiesCategories", { returnObjects: true })

  return (
    <main className={styles.main} id="cards">
      {isSmallScreen ? (
        <MobileCardsDisplay storiesCategories={storiesCategories} />
      ) : (
        <DesktopCardsDisplay storiesCategories={storiesCategories} />
      )}
    </main>
  )
}

export default Cards
