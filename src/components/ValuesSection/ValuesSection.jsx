import React from 'react'
import ValueItem from '../ValueItem';
import Divider from '../Divider';
import CustomLink from '../CustomLink';
import styles from './ValuesSection.module.css';
import { companyValues } from '../../utils/data';

export default function ValuesSection() {
  return (
    <section className={styles.valuesSectionContainer}>
      <article className={styles.valuesSectionList}>
        {companyValues.map((value, index) =>
          <ValueItem
            key={index}
            imageSrc={value.icon}
            imageAlt={value.alt}
            valueTitle={value.title}
            valueDescription={value.description}
          />
        )
        }
      </article>
      <article className={styles.moreInformation}>
        <Divider />
        <CustomLink label='SAIBA MAIS' hasIcon />
      </article>
    </section>
  )
}