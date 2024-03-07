export const headingToParam = (heading) => {
  return heading.split(" ").join("_")
}

export const paramToHeading = (param) => {
  return param.replaceAll("_", " ")
}

export const getStoryDetailsByParams = (storiesCategories, stories, story) => {
  const targetCategoryId = paramToHeading(stories)
  const targetStoryId = paramToHeading(story)

  const matchingCategory = Object.values(storiesCategories).find(
    (category) => category.id === targetCategoryId
  )

  if (!matchingCategory) {
    return null
  }

  const matchingStory = Object.entries(matchingCategory.stories).find(
    ([, story]) => story.id === targetStoryId
  )

  if (!matchingStory) {
    return null
  }

  const [heading, storyDetails] = matchingStory
  const path = `/assets/images/card/${story}`
  const illustrations = Array.from(
    { length: 4 },
    (_, index) => `${path}/${index + 1}.svg`
  )

  return {
    heading: heading,
    illustrations,
    ...storyDetails,
  }
}

export const getPdfByHeading = (storyHeading, img) => {
  return `/assets/pdf/individual/${headingToParam(storyHeading)}/${img}.pdf`
}
