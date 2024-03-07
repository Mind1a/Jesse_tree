import { CardGroup } from "../CardGroup/"
import styles from "./DesktopCardsDisplay.module.scss"

const DesktopCardsDisplay = ({ storiesCategories }) => {
  return (
    <div className={styles.desktopDisplay}>
      {Object.entries(storiesCategories).map(([title, stories]) => (
        <CardGroup
          title={title}
          storiesCategory={stories}
          isMobile={false}
          key={title}
        />
      ))}
    </div>
  )
}

export default DesktopCardsDisplay
