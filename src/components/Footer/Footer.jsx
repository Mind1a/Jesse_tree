import styles from "./Footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <a href="/assets/pdf/full/illustrations.pdf" target="_blank">
          Download Illustrations
          {/* გადმოიწერეთ ილუსტრაციები */}
        </a>
        <a href="/assets/pdf/full/colorbook.pdf" target="_blank">
          Download Colorbook
          {/* გადმოიწერეთ გასაფერადებელი */}
        </a>
      </div>
      <div>
        <a href="">
          Book&apos;s Online Version
          {/* წიგნის ონლაინ ვერსია */}
        </a>
        <a href="">
          Buy This Book
          {/* წიგნის შეძენა */}
        </a>
      </div>
    </footer>
  )
}

export default Footer
