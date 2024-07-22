const CreateArr = (yLenght, xLenght) => {
  let fieldArray = [];
  for (let i = 1; i <= yLenght; i++) {
    let lineArray = [];
    for (let j = 1; j <= xLenght; j++) {
        const contentChance = Math.floor(Math.random() * 10);
        
        let tempContent = 'empty'
        if (contentChance === 1) {
            tempContent = "zombie";
          }
          if (1 === contentChance & contentChance === 2) {
            tempContent = "wall";
          }
          if (contentChance === 5) {
            tempContent = "heal";
          }
      lineArray.push({
        cellContent: tempContent,
        id: j + i * yLenght,
        positionX: i,
        positionY: j,
      });
      
      
    }
    fieldArray.push({'id': i,'lineArray': lineArray});
  }

  return fieldArray;
};

export default CreateArr;
