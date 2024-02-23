import storiesData from "../data"

export const headingToParam = (heading) => {
  return heading.split(" ").join("_")
}

export const paramToHeading = (param) => {
  return param.replaceAll("_", " ")
}

export const getStoryDetailsByheading = (storiesHeading, storyHeading) => {
  try {
    if (!storiesData[storiesHeading]) {
      throw new Error(`Stories heading "${storiesHeading}" not found in data.`)
    }

    const storyObj = storiesData[storiesHeading].find(
      (story) => story.heading === storyHeading
    )

    if (!storyObj) {
      throw new Error(
        `Story with heading "${storyHeading}" not found in "${storiesHeading}" stories.`
      )
    }

    const path = `/assets/images/card/${headingToParam(storyHeading)}`
    const illustrations = Array.from(
      { length: 4 },
      (_, index) => `${path}/${index + 1}.svg`
    )

    return {
      ...storyObj,
      illustrations,
    }
  } catch (error) {
    return null
  }
}

export const getPdfByHeading = (storyHeading, img) => {
  return `/assets/pdf/${headingToParam(storyHeading)}/${img}.pdf`
}
