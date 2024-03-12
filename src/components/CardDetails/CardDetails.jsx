import { useParams } from "react-router-dom"
import { getStoryDetailsByParams } from "../../utils"
import { NotFound } from "../NotFound"
import { DesktopIllustrationsDisplay } from "./DesktopIllustrationsDisplay"
import { MobileIllustrationsDisplay } from "./MobileIllustrationsDisplay"
import { useMatchMedia, breakpoint } from "../../hooks"
import { useTranslation } from "react-i18next"
import styles from "./CardDetails.module.scss"

const CardDetails = () => {
  const { t } = useTranslation()
  let { stories, story } = useParams()
  const isSmallScreen = useMatchMedia(breakpoint.max.medium)

  const storiesCategories = t("storiesCategories", { returnObjects: true })
  const storyDetails = getStoryDetailsByParams(
    storiesCategories,
    stories,
    story
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
        <TextDisplay storyDetails={storyDetails} />
      </main>
    </>
  )
}

const TextDisplay = ({ storyDetails }) => {
  return (
    <div className={styles.story}>
      <h1 className={styles.title}>{storyDetails?.heading}</h1>
      <p className={styles.verse}>{storyDetails?.verse}</p>
      <p className={styles.text}>
        {storyDetails.text.trim()
          ? storyDetails.text
          : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia id risus eu tincidunt. Duis porttitor nunc a risus congue sollicitudin. In hac habitasse platea dictumst. Fusce nec velit libero. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris eu luctus nibh, id blandit tellus. Vestibulum dictum blandit nunc nec ultricies. Cras egestas commodo magna rhoncus lacinia. Sed condimentum efficitur turpis, nec bibendum leo aliquam eu. Quisque vitae sodales felis. Nulla facilisi."}
      </p>
    </div>
  )
}

export default CardDetails
