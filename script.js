let choixIA = ['pierre', 'feuille', 'ciseaux', 'lezard', 'spock'];

function play(userChoice) {
  let aiChoice = choixIA[Math.floor(Math.random() * choixIA.length)];
  let resultText = determineWinner(userChoice, aiChoice);
  document.getElementById('result-text').innerHTML = `Vous avez choisi ${userChoice}. L'IA a choisi ${aiChoice}. ${resultText}`;
}

function determineWinner(userChoice, aiChoice) {
    if (userChoice === aiChoice) {
      return "C'est une égalité !";
    }
  
    const winConditions = {
      'pierre': ['ciseaux', 'lezard'],
      'feuille': ['pierre', 'spock'],
      'ciseaux': ['feuille', 'lezard'],
      'lezard': ['feuille', 'spock'],
      'spock': ['pierre', 'ciseaux']
    };
  
    if (winConditions[userChoice].includes(aiChoice)) {
      return "Vous avez gagné !";
    } else {
      return "Vous avez perdu !";
    }
  }
  let userScore = 0;
  let aiScore = 0;
  
  function play(userChoice) {
    let aiChoice = choixIA[Math.floor(Math.random() * choixIA.length)];
    let resultText = determineWinner(userChoice, aiChoice);
  
 
    if (resultText === "Vous avez gagné !") {
      userScore++;
    } else if (resultText === "Vous avez perdu !") {
      aiScore++;
    }
  
  
    document.getElementById('result-text').innerHTML = `Vous avez choisi ${userChoice}. L'IA a choisi ${aiChoice}. ${resultText}`;
    updateScores();
  }
  
  function updateScores() {
    document.getElementById('score').innerHTML = `Vous: ${userScore} | IA: ${aiScore}`;
  }
  