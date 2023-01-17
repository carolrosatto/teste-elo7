import React from 'react'
import styles from './StaffItem.module.css';

export default function StaffItem({ photoSrc, photoAlt }) {
  return (
    <img
      className={styles.staffPhoto}
      src={photoSrc}
      alt={photoAlt}
    />
  )
}