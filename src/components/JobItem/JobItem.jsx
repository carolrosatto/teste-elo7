import React from 'react'
import styles from "./JobItem.module.css";

function JobItem() {
  return (
    <article className={styles.jobItemContainer}>
      <span className={styles.jobTitle}>Desenvolvedor mobile</span>
      <span className={styles.jobLocation}>Barra Funda/SP</span>
    </article>
  )
}

export default JobItem;