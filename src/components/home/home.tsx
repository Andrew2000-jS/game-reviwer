import { Top, Middle, Bottom } from './sections'
import styles from './styles/home.module.css'

function Home () {
  return (
    <div className={styles.container}>
      <Top />
      <Middle />
      <Bottom />
    </div>
  )
}

export default Home
