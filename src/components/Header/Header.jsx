import React from 'react';
import Divider from '../Divider';
import Link from '../Link';
import styles from './Header.module.css'

function Header() {
  return (
    <header>
      <div className={styles.bannerContainer}>
        <h1 className={styles.title}>Trabalhe no Elo7</h1>
      </div>
      <div className={styles.headerTextContainer}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices mi. Mauris ut volutpat est ipsum.
          Maecenas vulputate sed diam sed finibus. Phasellus condimentum mollis leo, sit amet commodo dolor imperdiet at.
        </p>
        <Divider />
        <Link label="VAGAS EM ABERTO" hasIcon href="#" />
      </div>
    </header>
  )
}

export default Header;