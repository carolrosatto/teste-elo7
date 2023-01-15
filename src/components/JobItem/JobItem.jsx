import React from 'react'
import styles from "./JobItem.module.css";
import Link from "../Link";

function JobItem() {
  return (
    <article className={styles.jobItemContainer}>
      <Link className={styles.jobTitle} label="Desenvolvedor mobile" />
      <span className={styles.jobLocation}>Barra Funda</span>
    </article>
  )
}

export default JobItem;