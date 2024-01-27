import storiesData from "../data"

export const headingToParam = (heading) => {
  return heading.split(" ").join("_")
}

export const paramToHeading = (param) => {
  return param.replaceAll("_", " ")
}

export const getStoryDetailsByheading = (storiesHeading, storyHeading) => {
  let storyObj = storiesData[storiesHeading].find(
    (story) => story.heading === storyHeading
  )

  const path = `/assets/images/card/${headingToParam(storyHeading)}`
  const illustrations = Array.from(
    { length: 4 },
    (_, index) => `${path}/${index + 1}.svg`
  )

  storyObj = {
    ...storyObj,
    illustrations,
  }

  return storyObj
}
