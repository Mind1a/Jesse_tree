import { getPdfByHeading } from "../../../utils"

const Download = ({ heading, img }) => {
  return (
    <a href={getPdfByHeading(heading, img)} download>
      <img src="/assets/icons/download.svg" alt="download" />
    </a>
  )
}

export default Download
