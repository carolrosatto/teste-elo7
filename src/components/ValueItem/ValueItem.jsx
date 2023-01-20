import React from 'react'
import styles from './ValueItem.module.css';

export default function ValueItem({ imageSrc, imageAlt, valueDescription, valueTitle }) {
  return (
    <article className={styles.valueItemContainer}>
      <img
        className={styles.icon}
        src={imageSrc}
        alt={imageAlt}
      />
      <h3 className={styles.valueTitle}>{valueTitle.toUpperCase()}</h3>
      <p>{valueDescription}</p>
    </article>
  )
}