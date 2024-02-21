import styles from "./Footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <a href="">
          Download Illustrations
          {/* გადმოიწერეთ ილუსტრაციები */}
        </a>
        <a href="">
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
