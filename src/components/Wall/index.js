import React from "react"
import styles from "./Wall.module.css"
const Wall = (props) => {
  return (
    <div className={styles.wall}>
      <img src="./image/icons8-wall-100.png" alt="brickwall" />
    </div>
  )
};

export default Wall;
