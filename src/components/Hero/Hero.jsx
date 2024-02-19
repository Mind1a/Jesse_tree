import styles from "./Hero.module.scss"

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.wrapper}>
        <div className={styles.imgContainer}>
          <img src="/assets/icons/advent.svg" />
        </div>
        <div className={styles.text}>
          <p>
            Christmas is a special time. Every year, we celebrate the birth of
            our Lord, God, and Savior Jesus Christ. After the fall of Adam and
            Eve, the people of God were waiting for the Messiah, the chosen one,
            who would become the king of Israel and lead them. For many years,
            God prepared His faithful to welcome the Messiah, and one night, in
            a place called Bethlehem, the promised one, Christ was born.
          </p>

          <p>
            The whole story of the Old Testament is about preparation to meet
            Jesus. The narratives of Abraham, Isaac, Jacob, and Joseph tell us
            something about Christ. On this website, you can prepare to meet
            baby Jesus on the day of His birth.
          </p>
        </div>
      </div>

      <div className={styles.scroll}>
        <a href="#cards">
          <img src="/assets/icons/arrow.svg" />
        </a>
      </div>
    </section>
  )
}

export default Hero
