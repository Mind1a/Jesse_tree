import { Link } from "react-router-dom"
import { Card } from "../../Card"
import { headingToParam } from "../../../utils"
import styles from "./CardGroup.module.scss"

const CardGroup = ({ title, stories, isMobile }) => {
  return (
    <section className={styles.section} id={isMobile ? title : ""}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.cards}>
        {stories.map((story, index) => (
          <div className={styles.card} key={index}>
            <CardLink title={title} story={story} isMobile={isMobile}>
              <Card
                heading={story?.decorated_heading || story.heading}
                subheading=""
                illustration={story.illustration}
                card="card_main"
              />
            </CardLink>
          </div>
        ))}
      </div>
    </section>
  )
}

const CardLink = ({ children, title, story, isMobile }) => {
  return isMobile ? (
    <>
      {children}
      <Link
        className={styles.more}
        to={`${headingToParam(title)}/${headingToParam(story.heading)}`}
      >
        more
      </Link>
    </>
  ) : (
    <Link to={`${headingToParam(title)}/${headingToParam(story.heading)}`}>
      {children}
    </Link>
  )
}

export default CardGroup
