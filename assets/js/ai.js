const resultDiv = document.getElementById('result');
const buttons = document.querySelectorAll('#choices button');
const options = ['rock', 'paper', 'scissors'];

buttons.forEach(btn => {
  btn.onclick = () => {
    const player = btn.dataset.choice;
    const ai = options[Math.floor(Math.random() * 3)];

    let artPlayer = getAsciiArt(player);
    let artAI = getAsciiArt(ai);

    let outcome;
    if (player === ai) outcome = "draw";
    else if (
      (player === 'rock' && ai === 'scissors') ||
      (player === 'paper' && ai === 'rock') ||
      (player === 'scissors' && ai === 'paper')
    ) outcome = "you win";
    else outcome = "you lose";

    resultDiv.textContent = 
`You played:
${artPlayer}

AI played:
${artAI}

${outcome}`;
  };
});


function getAsciiArt(choice) {
  if(choice === 'rock') return `
    _______
---'   ____)
      (_____)
      (_____)
      (____)
---.__(___)
`;
  else if(choice === 'paper') return `
     _______
---'    ____)____
           ______)
          _______)
         _______)
---.__________)
`;
  else if(choice === 'scissors') return `
    _______
---'   ____)____
          ______)
       __________)
      (____)
---.__(___)
`;
  else return choice;
}