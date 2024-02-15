import { useState } from "react"
import { CardGroup } from "../CardGroup"
import styles from "./MobileCardsDisplay.module.scss"

const MobileCardsDisplay = ({ storiesData }) => {
  const titles = Object.keys(storiesData)
  const [visibleGroup, setVisibleGroup] = useState(0)

  const onScroll = (clickedScrollIndex) => {
    if (clickedScrollIndex === visibleGroup) {
      setVisibleGroup((prev) => prev + 1)
    }
  }

  return (
    <div className={styles.mobileDisplay}>
      {Object.entries(storiesData).map(([title, stories], index) => {
        return (
          <div
            key={title}
            style={{ display: index <= visibleGroup ? "block" : "none" }}
          >
            <CardGroup title={title} stories={stories} isMobile={true} />

            {index < titles.length - 1 && (
              <div className={styles.scroll}>
                <a
                  onClick={() => onScroll(index)}
                  href={`#${titles[index + 1]}`}
                >
                  <img src="/assets/icons/arrow.svg" />
                </a>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default MobileCardsDisplay
