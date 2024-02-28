import styles from "./Card.module.scss"

const Card = ({ heading, subheading, illustration, card }) => {
  return (
    <div className={styles[card]}>
      <h2 className={styles.heading}>{heading}</h2>
      <img className={styles.illustration} src={illustration} alt={heading} />
      <p className={styles.subheading}>{subheading}</p>
    </div>
  )
}

export default Card
