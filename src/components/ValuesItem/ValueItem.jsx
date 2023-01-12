import React from 'react'
import styles from "./ValueItem.module.css";

function ValueItem() {
  return (
    <div className={styles.valueItemContainer}>
      <img
        src='/assets/icons/qualidade.png'
        alt="Ícone de um rostinho feliz branco sobre um círculo amarelo"
      />
      <h2>QUALIDADE DE VIDA</h2>
      <p className={styles.valueDescription}>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
    </div>
  )
}

export default ValueItem;