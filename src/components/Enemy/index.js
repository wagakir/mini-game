import React from "react"
import styles from './Enemy.module.scss'
const Enemy = (props) => {
  return (
    <div className={styles.enemy}>
      <img src=".\image\icons8-enemy-100.png" alt="" />
    </div>
  )
};

export default Enemy;
