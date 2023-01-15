import React from 'react'
import styles from "./ValueItem.module.css";

function ValueItem({ imageSrc, imageAlt, valueDescription, valueTitle, key }) {
  return (
    <article key={key} className={styles.valueItemContainer}>
      <img
        src={imageSrc}
        alt={imageAlt}
      />
      <h2>{valueTitle}</h2>
      <p className={styles.valueDescription}>{valueDescription}</p>
    </article>
  )
}

export default ValueItem;