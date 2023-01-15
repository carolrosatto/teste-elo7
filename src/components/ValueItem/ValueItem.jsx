import React from 'react'
import styles from "./ValueItem.module.css";

function ValueItem({ imageSrc, imageAlt, valueDescription, valueTitle, key }) {
  return (
    <article key={key} className={styles.valueItemContainer}>
      <img
        src={imageSrc}
        alt={imageAlt}
      />
      <h2 className={styles.valueTitle}>{valueTitle.toUpperCase()}</h2>
      <p>{valueDescription}</p>
    </article>
  )
}

export default ValueItem;