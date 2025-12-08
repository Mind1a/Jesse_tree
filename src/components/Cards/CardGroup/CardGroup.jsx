import { Link } from "react-router-dom"
import { Card } from "../../Card"
import { headingToParam } from "../../../utils"
import styles from "./CardGroup.module.scss"

const CardGroup = ({ title, storiesCategory, isMobile }) => {
  let storyURL

  return (
    <section className={styles.section} id={isMobile ? title : ""}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.cards}>
        {Object.entries(storiesCategory.stories).map(
          ([storyHeading, storyDetails], index) => {
            const illustrationPath = storyDetails?.illustration || ""
            const illustrationParts = illustrationPath
              .split("/")
              .filter(Boolean)
            const illustrationSlug =
              illustrationParts.length >= 4 ? illustrationParts[3] : null

            storyURL = `${headingToParam(storiesCategory.id)}/${
              illustrationSlug || headingToParam(storyDetails.id)
            }`

            return (
              <div className={styles.card} key={index}>
                <Link to={storyURL}>
                  <Card
                    heading={storyDetails?.decorated_heading || storyHeading}
                    subheading=""
                    illustration={storyDetails.illustration}
                    card="card_main"
                  />
                </Link>
                {isMobile && (
                  <Link className={styles.more} to={storyURL}>
                    more
                  </Link>
                )}
              </div>
            )
          }
        )}
      </div>
    </section>
  )
}

export default CardGroup
