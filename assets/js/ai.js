const resultDiv = document.getElementById('result');
const buttons = document.querySelectorAll('#choices button');
const options = ['rock', 'paper', 'scissors'];

buttons.forEach(btn => {
  btn.onclick = () => {
    const player = btn.dataset.choice;
    const ai = options[Math.floor(Math.random()*3)];

    let resultText;
    if(player === ai) resultText = `Both chose ${player}! It's a draw.`;
    else if(
      (player==='rock' && ai==='scissors') ||
      (player==='paper' && ai==='rock') ||
      (player==='scissors' && ai==='paper')
    ) resultText = `You chose ${player}, AI chose ${ai}. You win! 🎉`;
    else resultText = `You chose ${player}, AI chose ${ai}. AI wins! 🤖`;

    resultDiv.textContent = resultText;
  };
});