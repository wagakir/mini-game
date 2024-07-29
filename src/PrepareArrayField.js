


const PrepareArrayField = (arrayField) => {
  // const arrayField = CreateArray(x,y)
  arrayField[0].lineArray[0].cellContent = 'mage'
  // arrayField.playerPositionVertical = 0
  // arrayField.playerPositionHorizontal = 0
  // let mageCell = arrayField[0][0]
  // mageCell.cellContent = 'mage'
  // array[0][0].cellContent = 'mage'
  // return (
  //   array
  // )
  arrayField[arrayField.length - 1].lineArray[arrayField[arrayField.length - 1].lineArray.length - 1].cellContent = 'door'
  // arrayField[arrayField.length].lineArray[].cellContent = 'mage'
  return(arrayField)
};

export default PrepareArrayField;
