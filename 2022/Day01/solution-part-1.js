const dataSplit = data.split('\n');

function partOne() {
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

  return multipleValues[0]
}