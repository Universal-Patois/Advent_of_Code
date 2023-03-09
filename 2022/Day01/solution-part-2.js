const dataSplit = data.split('\n');

function partTwo() {
  let currentArray = [];
  const multipleValues = [];
  
  dataSplit.forEach(element => {
    const parsedElement = parseInt(element);
    
    if(parsedElement) {
      currentArray.push(parsedElement);
    } else {
      let newValue = currentArray.reduce((acc, curr) => {
        acc += curr;
        return acc;
      }, 0);
      multipleValues.push(newValue);
      currentArray = [];
    }
  });

  multipleValues.sort((a, b) => b - a);

  console.log(multipleValues)

  return multipleValues[0] + multipleValues[1] + multipleValues[2];
}

console.log(partTwo())