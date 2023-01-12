import React from 'react'
import styles from "./StaffItem.module.css";

function StaffItem() {
  return (
    <img
      className={styles.staffPhoto}
      src="/assets/images/beatriz.png"
      alt="Mulher de óculos sorrindo para a câmera, foto em escala de cinza"
    />
  )
}

export default StaffItem;