import styles from '../styles/Gift.module.css'

export function Gift() {
  return (
    <div className={styles.gift}>
      <div className={styles.cover}></div>
      <div className={styles.body}></div>
      
      <div className={styles.tieVertical}></div>
      <div className={styles.tieHorizontal}></div>
    </div>
  )
}