import React from "react"
import styles from './Cell.module.css'
import Wall from "../Wall";
const Cell = (props) => {
        
  return (
    <div className={styles.cellDiv}>
        {props.cellContent === "wall" ? <Wall/> : ''}
        {props.cellContent === "zombie" ? <Wall/> : ''}
        {props.cellContent === "heal" ? <Wall/> : ''}
    </div>
  )
};

export default Cell;
