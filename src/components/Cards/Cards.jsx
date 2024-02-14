import storiesData from "../../data"
import styles from "./Cards.module.scss"
import { DesktopCardsDisplay } from "./DesktopCardsDisplay"
import { MobileCardsDisplay } from "./MobileCardsDisplay"

const Cards = () => {
  return (
    <main className={styles.main} id="cards">
      <DesktopCardsDisplay storiesData={storiesData} />
      <MobileCardsDisplay storiesData={storiesData} />
    </main>
  )
}

export default Cards
