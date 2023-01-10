import React from "react";
import styles from './Link.module.css';

function Link(props) {
  return (
    <a
      className={styles.link}
      href={props.href}
      aria-label={props.ariaLabel}>
      {props.label}
      {props.hasIcon ? <img src="/assets/icons/double-right-arrows.png" alt="Seta dupla apontando para a direita" /> : null}
    </a>
  )
}

export default Link;