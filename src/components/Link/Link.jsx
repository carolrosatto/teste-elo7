import { React } from "react";
import styles from './Link.module.css';
import rightDoubleArrow from "../../assets/icons/double-right-arrows.png";

function Link({ ariaLabel, onClick, label, hasIcon }) {
  return (
    <span
      className={styles.link}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {label}
      {hasIcon ? <img src={rightDoubleArrow} alt="Seta dupla apontando para a direita" /> : null}
    </span>
  )
}

export default Link;