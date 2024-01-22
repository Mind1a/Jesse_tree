import { useParams } from "react-router-dom"
import { useState } from "react"
import { Card } from "../Card/"
import { getStoryDetailsByheading, paramToHeading } from "../../utils"
import styles from "./CardDetails.module.scss"

const CardDetails = () => {
  return (
    <main className={styles.main}>
      <IllustrationsDisplay />
      <TextDisplay />
    </main>
  )
}

const IllustrationsDisplay = () => {
  let { stories, story } = useParams()

  const storyDetails = getStoryDetailsByheading(
    paramToHeading(stories),
    paramToHeading(story)
  )

  const [Image, setImage] = useState(storyDetails.illustrations[0])

  const handleImageClick = (illustration) => {
    setImage(illustration)
  }

  return (
    <section className={styles.illustrations}>
      <div className={styles.activeImageDisplay}>
        <Card
          heading={storyDetails.heading}
          subheading={storyDetails.subheading}
          illustration={[Image]}
          card="card_individual_active"
        />
      </div>

      <div className={styles.side}>
        {storyDetails.illustrations.map((illustration) => {
          return (
            <div
              key={illustration}
              className={`${styles.illustration} ${
                illustration == Image ? styles.activeSideImage : ""
              }`}
              onClick={() => handleImageClick(illustration)}
            >
              <Card
                heading={storyDetails.heading}
                subheading={storyDetails.subheading}
                illustration={illustration}
                card="card_individual_side"
              />
            </div>
          )
        })}

        <div className={styles.actions}>
          <div className={styles.print}>P</div>
          <div className={styles.download}>D</div>
        </div>
      </div>
    </section>
  )
}

const TextDisplay = () => {
  return (
    <p className={styles.text}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt numquam amet
      nostrum cum ut eum, provident explicabo odio rerum laboriosam eos
      blanditiis totam dolor fuga aut minima facilis, deleniti optio. Hic
      cupiditate impedit quibusdam eligendi iste at ratione minus voluptates
      deserunt porro sequi error dolore doloribus recusandae culpa fugit nihil
      dicta minima deleniti neque ducimus ipsum, beatae laborum? Ab, optio!
    </p>
  )
}

export default CardDetails
