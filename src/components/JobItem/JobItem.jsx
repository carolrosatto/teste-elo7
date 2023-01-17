import React from 'react'
import styles from "./JobItem.module.css";
import Link from "../Link";

function JobItem({ jobName, jobLocation }) {
  return (
    <article className={styles.jobItemContainer}>
      <Link className={styles.jobTitle} label={jobName} />
      <span className={styles.jobLocation}>{jobLocation}</span>
    </article>
  )
}

export default JobItem;