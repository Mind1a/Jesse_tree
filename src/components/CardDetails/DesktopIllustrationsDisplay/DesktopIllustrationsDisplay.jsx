import { useState } from "react"
import { Card } from "../../Card/"
import styles from "./DesktopIllustrationsDisplay.module.scss"

const DesktopIllustrationsDisplay = ({ storyDetails }) => {
  const [activeImgIdx, setActiveImgIdx] = useState(0)

  const handleImgChange = (index) => {
    setActiveImgIdx(index)
  }

  return (
    <section className={styles.illustrations}>
      <div className={styles.activeImageDisplay}>
        <Card
          heading={
            (activeImgIdx > 1 && storyDetails?.decorated_heading) ||
            storyDetails.heading
          }
          subheading={activeImgIdx !== 3 && storyDetails.subheading}
          illustration={[storyDetails.illustrations[activeImgIdx]]}
          card={
            activeImgIdx <= 1
              ? "card_individual_active_2"
              : "card_individual_active"
          }
        />
      </div>

      <div className={styles.side}>
        {storyDetails.illustrations.map((illustration, index) => {
          return (
            <div
              key={illustration}
              className={`${styles.illustration} ${
                illustration == storyDetails.illustrations[activeImgIdx]
                  ? styles.activeSideImage
                  : ""
              }`}
              onClick={() => handleImgChange(index)}
            >
              <Card
                heading={
                  (index > 1 && storyDetails?.decorated_heading) ||
                  storyDetails.heading
                }
                subheading={index !== 3 && storyDetails.subheading}
                illustration={illustration}
                card={
                  index <= 1 ? "card_individual_side_2" : "card_individual_side"
                }
              />
            </div>
          )
        })}

        <div className={styles.actions}>
          <img src="/assets/icons/print.svg" className={styles.print} />
          <img src="/assets/icons/download.svg" className={styles.download} />
        </div>
      </div>
    </section>
  )
}

export default DesktopIllustrationsDisplay
