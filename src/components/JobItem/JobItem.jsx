import React from 'react'
import styles from "./JobItem.module.css";

function JobItem() {
  return (
    <section className={styles.jobItemContainer}>
      <span className={styles.jobTitle}>Desenvolvedor mobile</span>
      <span className={styles.jobLocation}>Barra Funda/SP</span>
    </section>
  )
}

export default JobItem;