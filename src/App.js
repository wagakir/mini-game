import "./App.css";
import React, { useEffect, useState } from "react";
import CreateArr from "./CreateArray";
import Line from "./components/Line";

function App() {
  let [fieldArray, setFieldArray] = useState([]);
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

  useEffect(() => {
    setFieldArray(CreateArr(20, 30));
  }, []);
  return (
    <div className="App">
      <div className="wrapper">
        {fieldArray.map((obj) => (
          
          <Line key={obj.id}
          lineArray={obj.lineArray} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;
