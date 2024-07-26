import "./App.scss";
import React, { useEffect, useState } from "react";
import CreateArray from "./CreateArrayField";
import Line from "./components/Line";
import Heart from "./components/Heart";
import Enemy from "./components/Enemy";
import Wall from "./components/Wall";
import PrepeareArrayField from './PrepareArrayField'

function App() {
  const [fieldArray, setFieldArray] = useState([]);
  const [hpArray, setHpArray] = useState([]);
  const [hp, setHp] = useState(7);
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
  const hpRender = () => {
    let tempArr = [];
    for (let i = 1; i <= maxHp; i++) {
      if (i <= hp) {
        tempArr.push(true);
      } else {
        tempArr.push(false);
      }
      setHpArray(tempArr);
      // i < hp ? setHpArray(hpArray.concat(true)): setHpArray(hpArray.concat(false))
    }
  };
  useEffect(() => {
    hpRender();
  }, [hp]);
  useEffect(() => {
    // let arr =CreateArray(10, 10)
    setFieldArray(PrepeareArrayField( CreateArray(10,10)));
    hpRender();
  }, []);
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
        {fieldArray.map((obj) => (
          <Line key={obj.id} lineArray={obj.lineArray} />
        ))}
      </div>
    </div>
  );
}

export default App;
