import React from 'react';
import Link from '../Link';
import styles from './Header.module.css'

function Header() {
  return (
    <header>
      <div className={styles.bannerContainer}>
        <span className={styles.title}>Trabalhe no Elo7</span>
      </div>
      <div className={styles.headerTextContent}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices mi. Mauris ut volutpat est ipsum.
          Maecenas vulputate sed diam sed finibus. Phasellus condimentum mollis leo, sit amet commodo dolor imperdiet at.
        </p>
        <hr></hr>
        <Link />
      </div>
    </header>
  )
}

export default Header;