import { Fragment } from "react"
import { Card } from "../../Card/"
import { Download } from "../Actions"
import styles from "./MobileIllustrationsDisplay.module.scss"

const MobileIllustrationsDisplay = ({ storyDetails }) => {
  const order_of_images = [3, 1, 4, 2]

  return (
    <section className={styles.mobileDisplay}>
      {order_of_images.map((order, index) => {
        let illustration = storyDetails.illustrations[order - 1]
        return (
          <Fragment key={index}>
            <div
              key={illustration}
              className={`${styles.illustration}
            }`}
            >
              <Card
                heading={
                  (index % 2 == 0 && storyDetails?.decorated_heading) ||
                  storyDetails.heading
                }
                subheading={index !== 2 && storyDetails.subheading}
                illustration={illustration}
                card={
                  index % 2
                    ? "card_individual_active_2"
                    : "card_individual_active"
                }
              />
              <div className={styles.download}>
                <Download heading={storyDetails.heading} img={order} />
              </div>
            </div>
          </Fragment>
        )
      })}
    </section>
  )
}

export default MobileIllustrationsDisplay
