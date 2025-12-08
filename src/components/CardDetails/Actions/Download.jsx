import { getPdfByHeading } from "../../../utils"

const Download = ({ heading, img, illustration }) => {
  return (
    <a href={getPdfByHeading(heading, img, illustration)} download>
      <img src="/assets/icons/download.svg" alt="download" />
    </a>
  )
}

export default Download
