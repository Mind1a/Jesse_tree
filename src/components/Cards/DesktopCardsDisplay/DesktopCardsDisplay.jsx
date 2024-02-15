import { CardGroup } from "../CardGroup/"
import styles from "./DesktopCardsDisplay.module.scss"

const DesktopCardsDisplay = ({ storiesData }) => {
  return (
    <div className={styles.desktopDisplay}>
      {Object.entries(storiesData).map(([title, stories]) => (
        <CardGroup
          title={title}
          stories={stories}
          isMobile={false}
          key={title}
        />
      ))}
    </div>
  )
}

export default DesktopCardsDisplay
