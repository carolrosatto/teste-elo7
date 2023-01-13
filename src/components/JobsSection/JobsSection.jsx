import React from 'react'
import JobItem from '../JobItem/JobItem';
import styles from "./JobsSection.module.css";

function JobsSection({ vacancyName, location }) {
  return (
    <article className={styles.jobsListContainer}>
      <h2>VAGAS EM ABERTO</h2>
      <h3>DESENVOLVIMENTO</h3>
      <JobItem />
      <JobItem />
      <JobItem />
      <JobItem />
    </article>
  )
}

export default JobsSection;