import { useParams } from "react-router-dom"
import { useState } from "react"
import { Card } from "../Card/"
import { getStoryDetailsByheading, paramToHeading } from "../../utils"
import styles from "./CardDetails.module.scss"
import { NotFound } from "../NotFound"

const CardDetails = () => {
  let { stories, story } = useParams()

  const storyDetails = getStoryDetailsByheading(
    paramToHeading(stories),
    paramToHeading(story)
  )

  if (!storyDetails) {
    return <NotFound />
  }

  return (
    <>
      <main className={styles.main}>
        <IllustrationsDisplay storyDetails={storyDetails} />
        <TextDisplay />
      </main>
    </>
  )
}

const IllustrationsDisplay = ({ storyDetails }) => {
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
