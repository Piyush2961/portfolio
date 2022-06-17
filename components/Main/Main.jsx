import styles from './Main.module.css'
import Heading from './Heading/Heading'
import About from './About/About'

const Main = () => {
  return (
    <div className={styles.main}>
      <Heading />
      <About />
    </div>
  )
}

export default Main