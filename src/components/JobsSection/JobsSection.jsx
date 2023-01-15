import React from 'react'
import JobItem from '../JobItem/JobItem';
import styles from "./JobsSection.module.css";

function JobsSection({ jobName, location }) {
  return (
    <section className={styles.jobsListContainer} id="jobSection">
      <h2 className={styles.jobSectionTitle}>VAGAS EM ABERTO</h2>
      <h3 className={styles.jobAreaTitle}>DESENVOLVIMENTO</h3>
      <JobItem />
      <JobItem />
      <JobItem />
      <JobItem />
    </section>
  )
}

export default JobsSection;