import React from 'react'
import JobItem from '../JobItem/JobItem';
import styles from './JobsSection.module.css';

export default function JobsSection({ jobList }) {
  return (
    <section className={styles.jobsSectionContainer} id='jobSection'>
      <h2 className={styles.jobSectionTitle}>VAGAS EM ABERTO</h2>
      <h3 className={styles.jobAreaTitle}>DESENVOLVIMENTO</h3>
      {jobList.map((job, index) => {
        if (!job.localizacao) {
          return <JobItem
            key={index}
            jobName={job.cargo}
            jobLocation='Remoto'
          />
        } else {
          return <JobItem
            key={index}
            jobName={job.cargo}
            jobLocation={`${job.localizacao.bairro} - ${job.localizacao.cidade}, ${job.localizacao.pais}`}
          />
        }
      })}
    </section>
  )
}