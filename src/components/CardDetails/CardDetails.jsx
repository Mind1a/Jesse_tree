import { useParams } from "react-router-dom"
import { getStoryDetailsByheading, paramToHeading } from "../../utils"
import { NotFound } from "../NotFound"
import { DesktopIllustrationsDisplay } from "./DesktopIllustrationsDisplay"
import styles from "./CardDetails.module.scss"
import { MobileIllustrationsDisplay } from "./MobileIllustrationsDisplay"

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
        <DesktopIllustrationsDisplay storyDetails={storyDetails} />
        <MobileIllustrationsDisplay storyDetails={storyDetails} />
        <TextDisplay />
      </main>
    </>
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
