import React from "react"
import styles from "./Heart.module.scss"

const Heart = (props) => {
  return (
    <div className={styles.heart}>
      {props.painted ? <img src='./image/icons8-heart-100.png' alt="heart"></img>: <img src='./image/icons8-heart-outlined-100.png' alt="heart"></img>}
    </div>
  )
};

export default Heart;
