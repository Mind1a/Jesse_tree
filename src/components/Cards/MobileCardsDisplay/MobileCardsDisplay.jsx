import { useState } from "react"
import { CardGroup } from "../CardGroup"
import styles from "./MobileCardsDisplay.module.scss"

const MobileCardsDisplay = ({ storiesCategories }) => {
  const titles = Object.keys(storiesCategories)
  const [visibleGroup, setVisibleGroup] = useState(0)

  return (
    <div className={styles.mobileDisplay}>
      <div className={styles.groups}>
        {Object.entries(storiesCategories).map(([title, stories], index) => {
          return (
            <div
              key={title}
              style={{ display: index <= visibleGroup ? "block" : "none" }}
            >
              <CardGroup
                title={title}
                storiesCategory={stories}
                isMobile={true}
              />
            </div>
          )
        })}
      </div>

      {titles.length > 1 && (
        <div className={styles.scroll}>
          <a
            onClick={() =>
              visibleGroup < titles.length
                ? setVisibleGroup((prevVisibleGroup) => prevVisibleGroup + 1)
                : null
            }
            href={
              visibleGroup === titles.length
                ? `#cards`
                : `#${titles[visibleGroup]}`
            }
          >
            <img
              src="/assets/icons/arrow.svg"
              alt="scroll to stories"
              style={{
                transform:
                  visibleGroup >= titles.length - 1 ? "scaleY(-1)" : "",
              }}
            />
          </a>
        </div>
      )}
    </div>
  )
}

export default MobileCardsDisplay
