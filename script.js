let choixIA = ['pierre', 'feuille', 'ciseaux', 'lezard', 'spock'];

function play(userChoice) {
  let aiChoice = choixIA[Math.floor(Math.random() * choixIA.length)];
  let resultText = determineWinner(userChoice, aiChoice);
  document.getElementById('result-text').innerHTML = `Vous avez choisi ${userChoice}. L'IA a choisi ${aiChoice}. ${resultText}`;
}
