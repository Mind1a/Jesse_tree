import { getPdfByHeading } from "../../../utils"

const Print = ({ heading, img }) => {
  const handlePrint = () => {
    const pdfPath = getPdfByHeading(heading, img)
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
