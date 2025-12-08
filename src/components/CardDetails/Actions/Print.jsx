import { getPdfByHeading } from "../../../utils"

const Print = ({ heading, img, illustration }) => {
  const handlePrint = () => {
    const pdfPath = getPdfByHeading(heading, img, illustration)
    const newWindow = window.open(pdfPath, "")

    if (newWindow) {
      newWindow.onload = () => {
        newWindow.print()
      }
    }
  }

  return <img src="/assets/icons/print.svg" alt="print" onClick={handlePrint} />
}

export default Print
