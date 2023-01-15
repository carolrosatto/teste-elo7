import { React } from "react";
import styles from './Link.module.css';
import rightDoubleArrow from "../../assets/icons/double-right-arrows.png";

function Link(props) {
  return (
    <span
      className={styles.link}
      aria-label={props.ariaLabel}
      onClick={props.onClick}
    >
      {props.label}
      {props.hasIcon ? <img src={rightDoubleArrow} alt="Seta dupla apontando para a direita" /> : null}
    </span>
  )
}

export default Link;