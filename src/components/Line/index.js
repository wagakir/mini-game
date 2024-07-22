import React from "react";
import styles from "./Line.module.css";
import Cell from "../Cell";
const Line = (props) => {
    
      React.useState(()=>{},[])
  return (
    <div className={styles.lineDiv}>
       {props.lineArray.map((obj)=>(
        
          <Cell
          
          key={obj.id}
          positionX={obj.positionX}
          positionY={obj.positionY}
          cellContent={obj.cellContent}
        />))}

    </div>
  )
};

export default Line;
