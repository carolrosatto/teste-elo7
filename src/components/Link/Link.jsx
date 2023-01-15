import React from "react";
import styles from './Link.module.css';
import rightDoubleArrow from "../../assets/icons/double-right-arrows.png";

function Link(props) {
  return (
    <a
      className={styles.link}
      href={props.href}
      aria-label={props.ariaLabel}>
      {props.label}
      {props.hasIcon ? <img src={rightDoubleArrow} alt="Seta dupla apontando para a direita" /> : null}
    </a>
  )
}

export default Link;