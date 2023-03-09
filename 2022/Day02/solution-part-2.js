const calculateScore = (moves) => {
  
  let opponentScore = 0
  let yourScore = 0
  
  const groupedMoves = moves.split('\n').map((round) => round.split(' '))
  
  const gameRounds = groupedMoves.reduce((obj, roundMoves, index) => {
     obj[index] = roundMoves
    return obj
  }, {})

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
      case 'Y':
        round[1] = round[0]
        break
    }

    if (round[1] === 'X' && round[0] === 1) {
      round[1] = 3
    } else if (round[1] === 'X' && round[0] === 2) {
      round[1] = 1
    } else if (round[1] === 'X' && round[0] == 3) {
      round[1] = 2
    }

    if (round[1] === 'Z' && round[0] === 1) {
      round[1] = 2
    } else if (round[1] === 'Z' && round[0] === 2) {
      round[1] = 3
    } else if (round[1] === 'Z' && round[0] == 3) {
      round[1] = 1
    }
  })

  const calculateShapePoints = Object.values(gameRounds).forEach(round => {

    switch(round[0]) {
      case 1:
        opponentScore += 1
        break
      case 2:
        opponentScore += 2
        break
      case 3:
        opponentScore += 3
        break
    }

    switch(round[1]) {
      case 1:
        yourScore += 1
        break
      case 2:
        yourScore += 2
        break
      case 3:
        yourScore += 3
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