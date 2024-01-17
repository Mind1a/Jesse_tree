import { Card } from "../Card"
import storiesData from "../../data"
import styles from "./Cards.module.scss"

const Cards = () => {
  return (
    <main className={styles.main} id="main-cards">
      {Object.entries(storiesData).map(([title, stories]) => (
        <section key={title} className={styles.section}>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.cards}>
            {stories.map((story, index) => (
              <Card
                key={index}
                heading={story.heading}
                subheading={story.subheading}
                illustration={story.illustration}
              />
            ))}
          </div>
        </section>
      ))}
    </main>
  )
}

export default Cards
