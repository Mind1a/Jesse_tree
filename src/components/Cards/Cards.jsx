import storiesData from "../../data"
import { DesktopCardsDisplay } from "./DesktopCardsDisplay"
import { MobileCardsDisplay } from "./MobileCardsDisplay"
import { useMatchMedia, breakpoint } from "../../hooks"
import styles from "./Cards.module.scss"

const Cards = () => {
  const isSmallScreen = useMatchMedia(breakpoint("max").small)

  return (
    <main className={styles.main} id="cards">
      {isSmallScreen ? (
        <MobileCardsDisplay storiesData={storiesData} />
      ) : (
        <DesktopCardsDisplay storiesData={storiesData} />
      )}
    </main>
  )
}

export default Cards
