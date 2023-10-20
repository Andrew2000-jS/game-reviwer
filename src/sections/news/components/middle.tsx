import styles from './styles/middle.module.css'

function Middle () {
  return (
    <section className={styles.container}>
        <article className={styles.left}>left</article>
        <article className={styles.right}>right</article>
    </section>
  )
}

export default Middle
