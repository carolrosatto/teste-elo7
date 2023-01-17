import React from 'react'
import styles from './JobItem.module.css';
import CustomLink from '../CustomLink';

export default function JobItem({ jobName, jobLocation }) {
  return (
    <article className={styles.jobItemContainer}>
      <CustomLink className={styles.jobTitle} label={jobName} />
      <span className={styles.jobLocation}>{jobLocation}</span>
    </article>
  )
}