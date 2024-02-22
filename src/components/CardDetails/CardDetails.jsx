import { useParams } from "react-router-dom"
import { getStoryDetailsByheading, paramToHeading } from "../../utils"
import { NotFound } from "../NotFound"
import { DesktopIllustrationsDisplay } from "./DesktopIllustrationsDisplay"
import { MobileIllustrationsDisplay } from "./MobileIllustrationsDisplay"
import { useMatchMedia, breakpoint } from "../../hooks"
import styles from "./CardDetails.module.scss"

const CardDetails = () => {
  let { stories, story } = useParams()
  const isSmallScreen = useMatchMedia(breakpoint("max").medium)

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
        {isSmallScreen ? (
          <MobileIllustrationsDisplay storyDetails={storyDetails} />
        ) : (
          <DesktopIllustrationsDisplay storyDetails={storyDetails} />
        )}
        <TextDisplay />
      </main>
    </>
  )
}

const TextDisplay = () => {
  return (
    <p className={styles.text}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia
      id risus eu tincidunt. Duis porttitor nunc a risus congue sollicitudin. In
      hac habitasse platea dictumst. Fusce nec velit libero. Interdum et
      malesuada fames ac ante ipsum primis in faucibus. Mauris eu luctus nibh,
      id blandit tellus. Vestibulum dictum blandit nunc nec ultricies. Cras
      egestas commodo magna rhoncus lacinia. Sed condimentum efficitur turpis,
      nec bibendum leo aliquam eu. Quisque vitae sodales felis. Nulla facilisi.{" "}
    </p>
  )
}

export default CardDetails
