import { Link } from "react-router-dom"
import styles from "./Error.module.scss"

const Error = () => {
  return (
    <main className={styles.main}>
      <p>404</p>
      <p>Page Not Found</p>
      <Link to="/">Go Home</Link>
    </main>
  )
}

export default Error
