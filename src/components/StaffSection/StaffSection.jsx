import React from 'react'
import StaffItem from '../StaffItem/StaffItem';
import styles from "./StaffSection.module.css";

function StaffSection() {
  return (
    <article className={styles.staffSectionContainer}>
      <h2>CONHEÇA NOSSO TIME FORA DE SÉRIE</h2>
      <section className={styles.staffPhotosContainer}>
        <StaffItem />
        <StaffItem />
        <StaffItem />
        <StaffItem />
      </section>
    </article>
  )
}

export default StaffSection;