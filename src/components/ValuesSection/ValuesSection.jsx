import React from 'react'
import ValueItem from '../ValueItem';
import Divider from '../Divider';
import Link from '../Link';
import styles from "./ValuesSection.module.css";
import * as data from '../../utils/data';

const valuesData = data.companyValues;

function ValuesSection() {
  return (
    <section className={styles.valuesSectionContainer}>
      <article className={styles.valuesSectionList}>
        {valuesData.map((value, index) =>
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
        <Link label="SAIBA MAIS" hasIcon />
      </article>
    </section>
  )
}

export default ValuesSection;