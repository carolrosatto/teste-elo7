import React from 'react'
import ValuesItem from '../ValuesItem';
import Divider from '../Divider';
import Link from '../Link';
import styles from "./ValuesSection.module.css";

function ValuesSection() {
  return (
    <article className={styles.valuesSectionContainer}>
      <section className={styles.valuesSectionList}>
        <ValuesItem />
        <ValuesItem />
        <ValuesItem />
      </section>
      <section className={styles.moreInformation}>
        <Divider />
        <Link label="SAIBA MAIS" hasIcon />
      </section>
    </article>
  )
}

export default ValuesSection;