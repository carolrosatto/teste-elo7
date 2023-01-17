import React from 'react'
import styles from './Banner.module.css';

export default function Banner({ bannerImage, bannerAlt }) {
  return (
    <section className={styles.bannerContainer}>
      <img className={styles.bannerImage} src={bannerImage} alt={bannerAlt} />
    </section>
  )
}