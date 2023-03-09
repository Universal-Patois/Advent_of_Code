const calculateScore = (moves) => {
  let opponentScore = 0
  let yourScore = 0
  
  const groupedMoves = moves.split('\n')
  
  const groupedMovesArray = groupedMoves.map(move => {
    return move.split(' ')
  }) 
  
  const gameRounds = groupedMovesArray.reduce((obj, roundMoves, index) => {
     obj[index] = roundMoves
    return obj
  }, {})

  const calculateShapePoints = Object.values(gameRounds).forEach(round => {

    switch(round[0]) {
      case 'A':
        opponentScore += 1
        break
      case 'B':
        opponentScore += 2
        break
      case 'C':
        opponentScore += 3
        break
    }

    switch(round[1]) {
      case 'X':
        yourScore += 1
        break
      case 'Y':
        yourScore += 2
        break
      case 'Z':
        yourScore += 3
        break
    }
  })

  const convertRoundChoices = Object.values(gameRounds).forEach(round => {

     switch(round[0]) {
      case 'A':
        round[0] = 1
        break
      case 'B':
        round[0] = 2
        break
      case 'C':
        round[0] = 3
        break
    }
  
    switch(round[1]) {
      case 'X':
        round[1] = 1
        break
      case 'Y':
        round[1] = 2
        break
      case 'Z':
        round[1] = 3
        break
    }
  })

  const calculateRoundScore = Object.values(gameRounds).forEach(round => {

    if (round[0] === round[1]) {
      opponentScore += 3
      yourScore += 3
    } else if (round[0] === 1 && round[1] === 3 || round[0] === 2 && round[1] === 1 || round[0] === 3 && round[1] === 2) {
      opponentScore += 6
    } else if (round[1] === 1 && round[0] === 3 || round[1] === 2 && round[0] === 1 || round[1] === 3 && round[0] === 2) {
      yourScore += 6
    }
  })
  
  return gameRounds
}

