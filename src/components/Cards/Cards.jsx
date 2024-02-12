import { Card } from "../Card"
import { Link } from "react-router-dom"
import { headingToParam } from "../../utils"
import storiesData from "../../data"
import styles from "./Cards.module.scss"

const Cards = () => {
  return (
    <main className={styles.main} id="cards">
      {Object.entries(storiesData).map(([title, stories]) => (
        <section key={title} className={styles.section}>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.cards}>
            {stories.map((story, index) => (
              <div className="card" key={index}>
                <Link
                  to={`${headingToParam(title)}/${headingToParam(
                    story.heading
                  )}`}
                >
                  <Card
                    heading={story?.decorated_heading || story.heading}
                    subheading=""
                    illustration={story.illustration}
                    card="card_main"
                  />
                </Link>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  )
}

export default Cards
