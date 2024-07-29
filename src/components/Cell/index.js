import React from "react"
import styles from './Cell.module.scss'
import Heart from "../Heart";

const Cell = (props) => {
  const divRef= React.useRef()
   
  React.useEffect(()=>{
  },[])
    
    
  return (
    <div ref={divRef} className={styles.cellDiv} onChange={()=>divRef.scrollIntoView()} id ={props.id}>
       {props.cellContent ==="door" ? <img src="./image/icons8-door-100.png"  alt="door" /> : <img src="./image/icons8-texture-100.png" className="styles.textureBg" alt="texture background" />}
        {props.cellContent === "wall" ? <img src="./image/icons8-wall-100.png" alt="brickwall" /> : ''}
        {props.cellContent === "enemy" ? <img src=".\image\icons8-enemy-100.png" alt="enemy" />: ''}
        {props.cellContent === "heal" ? <Heart painted={true}/> : ''}
        {props.cellContent === "mage" ? <img        src="./image/icons8-mage-100.png" alt="mage" /> : ''}
       
        

    </div>
  )
};

export default Cell;
