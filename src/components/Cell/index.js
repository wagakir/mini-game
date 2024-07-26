import React from "react"
import styles from './Cell.module.css'
import Wall from "../Wall";
import Mage from "../Mage";
import Heart from "../Heart";
import Enemy from "../Enemy";
const Cell = (props) => {
        
  return (
    <div className={styles.cellDiv}>
        {props.cellContent === "wall" ? <Wall/> : ''}
        {props.cellContent === "enemy" ? <Enemy/>: ''}
        {props.cellContent === "heal" ? <Heart painted={true}/> : ''}
        {props.cellContent === "mage" ? <Mage/> : ''}
    </div>
  )
};

export default Cell;
