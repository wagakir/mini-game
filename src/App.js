import "./App.scss";
import React, { useEffect, useState } from "react";
import CreateArray from "./CreateArrayField";
import Line from "./components/Line";
import Heart from "./components/Heart";
import PrepareArrayField from "./PrepareArrayField";

function App() {
  const [fieldArray, setFieldArray] = useState(
    PrepareArrayField(CreateArray(26, 26))
  );
  const [playerPositionY, setPlayerPositionY] = useState(0);
  const [playerPositionX, setPlayerPositionX] = useState(0);
  const [hpArray, setHpArray] = useState([]);
  const [hp, setHp] = useState(5);
  const maxHp = 7;
  // for (let i = 1; i <= 20; i++){
  //   countLines[
  //     {"cellContent":'false', "id":1},
  //     {"cellContent":'false', "id":2},
  //     {"cellContent":'false', "id":3},
  //     {"cellContent":'false', "id":4},
  //     {"cellContent":'false', "id":5},
  //     {"cellContent":'false', "id":6},
  //     {"cellContent":'false', "id":7},
  //     {"cellContent":'false', "id":8},
  //     {"cellContent":'false', "id":9},
  //     {"cellContent":'false', "id":10},
  //     {"cellContent":'false', "id":11},
  //     {"cellContent":'false', "id":12},
  //     {"cellContent":'false', "id":13},
  //     {"cellContent":'false', "id":14},
  //     {"cellContent":'false', "id":15},
  //     {"cellContent":'false', "id":16},
  //     {"cellContent":'false', "id":17},
  //     {"cellContent":'false', "id":18},
  //     {"cellContent":'false', "id":19},
  //     {"cellContent":'false', "id":20},
  //     {"cellContent":'false', "id":21},
  //     {"cellContent":'false', "id":22},
  //     {"cellContent":'false', "id":23},
  //     {"cellContent":'false', "id":24},
  //     {"cellContent":'false', "id":25},
  //     {"cellContent":'false', "id":26},
  //     {"cellContent":'false', "id":27},
  //     {"cellContent":'false', "id":28},
  //     {"cellContent":'false', "id":29},
  //     {"cellContent":'false', "id":30}
  //   ]
  // }
  const hpChange = (count) => {
    setHp(hp + count);
    let tempArr = [];
    for (let i = 1; i <= maxHp; i++) {
      if (i <= hp) {
        tempArr.push(true);
      } else {
        tempArr.push(false);
      }
      setHpArray(tempArr);
    }
  };
  const setItem = (y, x, item) => {
    let tempArray = fieldArray.map((obj) => obj);
    tempArray[y].lineArray[x].cellContent = item;
    setFieldArray(tempArray);
  };
  // const moveMage = (x,y)=>{
  //   setItem(x,y)
  //   setItem(x,y)
  // }
  useEffect(() => {
    hpChange(0);
  }, [hp]);

  useEffect(() => {
    hpChange(0);
    // let playerPositionX = 0
    // let playerPositionY = 0
    // document.onkeydown = (key) => {

    // if (key.code === "ArrowLeft" || key.code === "KeyA") {
    // fieldArray[playerPositionY].lineArray[playerPositionX].cellContent = 'empty'

    // playerPositionX--
    // fieldArray[playerPositionY].lineArray[playerPositionX].cellContent = 'mage'
    // }
    // if (key.code === "ArrowUp" || key.code === "KeyW") {
    // fieldArray[playerPositionY].lineArray[playerPositionX].cellContent = 'empty'

    // playerPositionY--
    // fieldArray[playerPositionY].lineArray[playerPositionX].cellContent = 'mage'
    //   }

    // if (key.code === "ArrowRight" || key.code === "KeyD") {
    //   setItem(playerPositionY, playerPositionX, 'empty')
    // fieldArray[playerPositionY].lineArray[playerPositionX].cellContent = 'empty'

    // playerPositionX ++
    // console.log(playerPositionX);
    // setItem(playerPositionY, playerPositionX, 'mage')
    // console.log(fieldArray[playerPositionY].lineArray[playerPositionX].cellContent);
    // fieldArray[playerPositionY].lineArray[playerPositionX].cellContent = 'mage'
    // }
    // if (key.code === "ArrowDown" || key.code === "KeyS") {
    // fieldArray[playerPositionY].lineArray[playerPositionX].cellContent = 'empty'
    // playerPositionY++
    // fieldArray[playerPositionY].lineArray[playerPositionX].cellContent = 'mage'
    // }
    // setFieldArray(fieldArray)
    //  };
    // arrayFieldRemoveContent(0, 3);
    // arrayFieldRemoveContent(0, 2);
  }, []);
  document.onkeydown = (key) =>{ 
   
    if (key.code === "ArrowLeft" || key.code === "KeyA") {
      if (playerPositionX !== 0) {
        if (
          fieldArray[playerPositionY].lineArray[playerPositionX - 1]
            .cellContent === "enemy"
        ) {
          hpChange(-1);
        }
        if (
          fieldArray[playerPositionY].lineArray[playerPositionX - 1]
            .cellContent === "empty" ||
          fieldArray[playerPositionY].lineArray[playerPositionX - 1]
            .cellContent === "heal"
        ) {
          if (
            fieldArray[playerPositionY].lineArray[playerPositionX - 1]
              .cellContent === "heal"
          ) {
            hpChange(1);
          }
          
          setPlayerPositionX(playerPositionX - 1);
          let tempPos = playerPositionX;
          fieldArray[playerPositionY].lineArray[tempPos].cellContent = "empty";
          tempPos--;
          fieldArray[playerPositionY].lineArray[tempPos].cellContent = "mage";
          setFieldArray(fieldArray);
        }
      }
    }
    if (key.code === "ArrowUp" || key.code === "KeyW") {
      if (playerPositionY !== 0) {
        if (
          fieldArray[playerPositionY - 1].lineArray[playerPositionX]
            .cellContent === "enemy"
        ) {
          hpChange(-1);
        }
        if (
          fieldArray[playerPositionY - 1].lineArray[playerPositionX]
            .cellContent === "empty" ||
          fieldArray[playerPositionY - 1].lineArray[playerPositionX]
            .cellContent === "heal"
        ) {
          if (
            fieldArray[playerPositionY - 1].lineArray[playerPositionX]
              .cellContent === "heal"
          ) {
            hpChange(1);
          }
          
          setPlayerPositionY(playerPositionY - 1);
          let tempPos = playerPositionY;
          fieldArray[tempPos].lineArray[playerPositionX].cellContent = "empty";
          tempPos--;
          fieldArray[tempPos].lineArray[playerPositionX].cellContent = "mage";
          setFieldArray(fieldArray);
        }
      }
    }

    if (key.code === "ArrowRight" || key.code === "KeyD") {
      if (
        playerPositionX + 1 !==
        fieldArray[playerPositionY].lineArray.length
      ) {
        if (
          fieldArray[playerPositionY].lineArray[playerPositionX + 1]
            .cellContent === "enemy"
        ) {
          hpChange(-1);
        }
        if (
          fieldArray[playerPositionY].lineArray[playerPositionX + 1]
            .cellContent === "empty" ||
          fieldArray[playerPositionY].lineArray[playerPositionX + 1]
            .cellContent === "heal"
        ) {
          if (
            fieldArray[playerPositionY].lineArray[playerPositionX + 1]
              .cellContent === "heal"
          ) {
            hpChange(1);
          }
          
          setPlayerPositionX(playerPositionX + 1);
          let tempPos = playerPositionX;
          setItem(playerPositionY, tempPos, "empty");
          tempPos++;
          setItem(playerPositionY, tempPos, "mage");
        }
      }
    }
    if (key.code === "ArrowDown" || key.code === "KeyS") {
      if (playerPositionY + 1 !== fieldArray.length) {
        if (
          fieldArray[playerPositionY + 1].lineArray[playerPositionX]
            .cellContent === "enemy"
        ) {
          hpChange(-1);
        }
        if (
          fieldArray[playerPositionY + 1].lineArray[playerPositionX]
            .cellContent === "empty" ||
          fieldArray[playerPositionY + 1].lineArray[playerPositionX]
            .cellContent === "heal"
        ) {
          if (
            fieldArray[playerPositionY + 1].lineArray[playerPositionX]
              .cellContent === "heal"
          ) {
            hpChange(1);
          }
          
          setPlayerPositionY(playerPositionY + 1);
          let tempPos = playerPositionY;
          fieldArray[tempPos].lineArray[playerPositionX].cellContent = "empty";
          tempPos++;
          fieldArray[tempPos].lineArray[playerPositionX].cellContent = "mage";
          setFieldArray(fieldArray);
        }
      }
    }
    // console.log( playerPositionX+1 + (playerPositionY+1)  * fieldArray[playerPositionY].lineArray.length)
  };
  return (
    <div className="App">
      {/* <button
        className="absolute left-0 h-10 w-10 bg-black"
        onClick={() => setHp(hp - 1)}
      ></button> */}
      <div className="hpBar">
        {hpArray.map((obj, index) => (
          <Heart key={index} painted={obj} />
        ))}
      </div>

      <div className="wrapper">
        <div className="overWrapper ">
        <div className=" absolute m-auto p-auto left-0 right-0 w-fit h-fit ">

        
      {hp > 0 ? fieldArray.map((obj) => (
          <Line key={obj.id} lineArray={obj.lineArray} />
        )): <h1 className="press-start-2p-big ">game over</h1>}
        </div></div>
      </div>
    </div>
  );
}

export default App;
