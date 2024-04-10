const monsterHealthBar = document.getElementById("monster-health");
const playerHealthBar = document.getElementById("player-health");
const attackBtn = document.getElementById("attack");
const strongAttackBtn = document.getElementById("strong-attack");
const healBtn = document.getElementById("heal");
const logBtn = document.getElementById("log");
const bonusLife = document.getElementById("bonus-life");

function dealPlayerDamage(damage) {
  const dealtDamage = Math.random() * damage;
  playerHealthBar.value = +playerHealthBar.value - dealtDamage;
  console.log(dealtDamage);
  return dealtDamage;
}

function dealMonsterDamage(damage) {
  const dealtDamage = Math.random() * damage;
  //   the + used as parseInt()
  monsterHealthBar.value = +monsterHealthBar.value - dealtDamage;

  return dealtDamage;
}

function healthBarUpdate(maxHealth) {
  playerHealthBar.value = maxHealth;
  playerHealthBar.max = maxHealth;
  monsterHealthBar.value = maxHealth;
  monsterHealthBar.max = maxHealth;
  console.log(playerHealthBar.value);
}

function healPlayer(heal_value) {
  playerHealthBar.value = +playerHealthBar.value + heal_value;
  console.log(heal_value);
}

function removeBonusLifeAndPlayerHealth(initialHealth) {
  //   bonusLife.textContent = "";
  bonusLife.parentNode.removeChild(bonusLife);
  playerHealthBar.value = initialHealth;
}

function resetGame(health) {
  playerHealthBar.value = health;
  monsterHealthBar.value = health;
}
