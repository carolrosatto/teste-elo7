import React from 'react';
import Divider from '../Divider';
import CustomLink from '../Link';
import styles from './Header.module.css'

function Header() {

  function scrollToItem(element) {
    if (element !== null) {
      const item = document.querySelector(element);
      item.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  return (
    <header>
      <div className={styles.bannerContainer}>
        <h1 className={styles.title}>Trabalhe no Elo7</h1>
      </div>
      <div className={styles.headerTextContainer}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices mi. Mauris ut volutpat est ipsum.
          Maecenas vulputate sed diam sed finibus. Phasellus condimentum mollis leo, sit amet commodo dolor imperdiet at.  Curabitur ac ultrices mi.
        </p>
        <Divider />
        <CustomLink label="VAGAS EM ABERTO" hasIcon onClick={() => scrollToItem("#jobSection")} />
      </div>
    </header>
  )
}

export default Header;