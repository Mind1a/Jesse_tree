export const headingToParam = (heading) => {
  return heading.split(" ").join("_")
}

export const paramToHeading = (param) => {
  return param.replaceAll("_", " ")
}

export const getStoryDetailsByParams = (storiesCategories, stories, story) => {
  const targetCategoryId = paramToHeading(stories)
  const targetStoryId = paramToHeading(story)
  const targetStorySlug = story

  const matchingCategory = Object.values(storiesCategories).find(
    (category) => category.id === targetCategoryId
  )

  if (!matchingCategory) {
    return null
  }

  const matchingStory = Object.entries(matchingCategory.stories).find(
    ([, story]) => {
      const slugFromIllustration = getIllustrationSlug(story.illustration)
      return (
        story.id === targetStoryId ||
        headingToParam(story.id) === targetStorySlug ||
        slugFromIllustration === targetStorySlug
      )
    }
  )

  if (!matchingStory) {
    return null
  }

  const [heading, storyDetails] = matchingStory

  // Derive the illustration folder from the provided illustration path to
  // support non-Latin story ids (e.g., Georgian). Fallback to the URL param
  // when the path is missing or malformed.
  const illustrationPath = storyDetails?.illustration || ""
  const lastSlashIndex = illustrationPath.lastIndexOf("/")
  const basePath =
    lastSlashIndex > 0
      ? illustrationPath.substring(0, lastSlashIndex)
      : `/assets/images/card/${story}`

  const illustrations = Array.from(
    { length: 4 },
    (_, index) => `${basePath}/${index + 1}.svg`
  )

  return {
    heading: heading,
    illustrations,
    ...storyDetails,
  }
}

export const getPdfByHeading = (storyHeading, img, illustrationPath = "") => {
  const slug = getPdfSlug(storyHeading, illustrationPath)
  return `/assets/pdf/individual/${slug}/${img}.pdf`
}

export const getIllustrationSlug = (illustrationPath) => {
  if (!illustrationPath) return ""
  const parts = illustrationPath.split("/").filter(Boolean)
  // path shape: /assets/images/card/<slug>/<n>.svg
  return parts.length >= 4 ? parts[3] : ""
}

const getPdfSlug = (heading, illustrationPath) => {
  const illustrationSlug = getIllustrationSlug(illustrationPath)
  if (illustrationSlug) return illustrationSlug
  return headingToParam(heading)
}
