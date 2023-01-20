import React from 'react'
import styles from './Banner.module.css';

export default function Banner({ bannerImage, bannerAlt }) {
  return (
    <img className={styles.bannerImage} src={bannerImage} alt={bannerAlt} />
  )
}