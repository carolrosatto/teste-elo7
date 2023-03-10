import React from 'react'
import StaffItem from '../StaffItem/StaffItem';
import styles from './StaffSection.module.css';
import { staffPhotos } from '../../utils/data';

export default function StaffSection() {
  return (
    <section className={styles.staffSectionContainer}>
      <h2 className={styles.staffSectionTitle}>CONHEÇA NOSSO TIME FORA DE SÉRIE</h2>
      <article className={styles.staffPhotosContainer}>
        {
          staffPhotos.map((photo, index) =>
            <StaffItem key={index} photoSrc={photo.src} photoAlt={photo.alt} />
          )
        }
      </article>
    </section>
  )
}