document.addEventListener('DOMContentLoaded', () => {
  const select = document.getElementById('dice-select');
  const rollBtn = document.getElementById('roll-button');
  const resultEl = document.getElementById('dice-result');

  function rollDice() {
    const faces = parseInt(select.value, 10) || 6;
    const result = Math.floor(Math.random() * faces) + 1;
    resultEl.textContent = result;
  }

  rollBtn.addEventListener('click', rollDice);
});
