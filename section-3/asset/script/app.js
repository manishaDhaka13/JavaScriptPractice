const ATTACK_VALUE = 15;
const STRONG_ATTACK_VALUE = 30;
const MONSTER_ATTACK_VALUE = 17;
const DEFAULT_HEALTH = 100;
const HEAL_VALUE = 20;
const attackEvent = "player attack";
const strongAttackEvent = "playerSTRONG_ATTACK";
const monsterAttackEvent = "MONSTER_ATTACK";
const healEvent = "HEAL_player";
const gameOverEvent = "game-over";
let playerHealth;
let monsterHealth;
let initial_health;
let hasBonusLife = true;
let logentries = [];
let lastLoggedEntry;
function getMaxHealthValue() {
  const enterdValue = prompt("please enter the maximum value of Health", "100");
  const parsedValue = parseInt(enterdValue);
  if (isNaN(parsedValue) || enterdValue == 0) {
    alert(
      "please enter a valid number greater then 0 ,default value 100 is used"
    );
    return 100;
  } else {
    return parsedValue;
  }
}

const maxHealth = getMaxHealthValue();
console.log(maxHealth);
healthBarUpdate(maxHealth);
playerHealth = maxHealth;
monsterHealth = maxHealth;

function writeToLog(ev, damage, player_health, monster_health) {
  let logentry = {
    event: ev,
    value: damage,
    finalPlayerHealth: player_health,
    finalMonsterHealth: monster_health,
  };

  if (ev == attackEvent || ev == strongAttackEvent) {
    logentry.target = "MONSTER";
    // by above code we can create a new key pair in existing object.
  } else if (ev == monsterAttackEvent) {
    logentry.target = "PLAYER";
  } else if (ev == healEvent) {
    logentry.target = "PLAYER";
  } else if (ev == gameOverEvent) {
  } else {
    logentry = {};
  }

  logentries.push(logentry);
}

function endRound() {
  const maxdamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  initial_health = playerHealth;
  playerHealth = playerHealth - maxdamage;
  if (playerHealth <= 0 && monsterHealth > 0) {
    if (hasBonusLife) {
      alert("you will be dead but bonus life saved you");
      playerHealth = initial_health;
      hasBonusLife = false;
      removeBonusLifeAndPlayerHealth(initial_health);
      writeToLog(monsterAttackEvent, 0, playerHealth, monsterHealth);
    } else if (!hasBonusLife) {
      alert("you lost");
      writeToLog(gameOverEvent, maxdamage, playerHealth, monsterHealth);
    }
  } else if (playerHealth <= 0 && monsterHealth <= 0) {
    alert("draw");
    writeToLog(gameOverEvent, maxdamage, playerHealth, monsterHealth);
  } else if (playerHealth > 0 && monsterHealth <= 0) {
    alert("you won");
    writeToLog(gameOverEvent, maxdamage, playerHealth, monsterHealth);
  } else {
    writeToLog(monsterAttackEvent, maxdamage, playerHealth, monsterHealth);
  }

  if (playerHealth <= 0 || monsterHealth <= 0) {
    reset();
  }
}

function reset() {
  playerHealth = maxHealth;
  monsterHealth = maxHealth;
  resetGame(maxHealth);
}

function playerAttack(mode) {
  let maxdamage;
  if (mode === ATTACK_VALUE) {
    maxdamage = dealMonsterDamage(ATTACK_VALUE);
    monsterHealth -= maxdamage;
    writeToLog(attackEvent, maxdamage, playerHealth, monsterHealth);
  } else if (mode === STRONG_ATTACK_VALUE) {
    maxdamage = dealMonsterDamage(STRONG_ATTACK_VALUE);
    monsterHealth -= maxdamage;
    writeToLog(strongAttackEvent, maxdamage, playerHealth, monsterHealth);
  }

  endRound();
}

function attackHandler() {
  const mode = ATTACK_VALUE;
  playerAttack(mode);
}

function strongAttackHandler() {
  const mode = STRONG_ATTACK_VALUE;
  playerAttack(mode);
}

function healPlayerHandler() {
  let healValue;
  if (maxHealth >= playerHealth + HEAL_VALUE) {
    healValue = HEAL_VALUE;
  } else if (maxHealth < playerHealth + HEAL_VALUE) {
    alert("you can't heal more than max life");
    healValue = maxHealth - playerHealth;
  }
  healPlayer(healValue);
  playerHealth += healValue;
  writeToLog(healEvent, healValue, playerHealth, monsterHealth);
  endRound();
}

function logHandler() {
  //   console.log(logentries);
  //   let i = 0;
  //   for (const el of logentries) {
  //     console.log(`#${i}`);
  //     for (const key in el) {
  //       console.log(`${key}: ${el[key]}`);
  //       //    key is not a key pair in logenteries object so we can't write
  //       //    logenteries.key.
  //       //    to access the value of key we have to write it $(logentries[key])
  //       //    here the javascript take the value of key like event
  //     }
  //     i++;
  //   }

  let i = 0;
  for (const el of logentries) {
    if ((!lastLoggedEntry && lastLoggedEntry !== 0) || lastLoggedEntry < i) {
      console.log(`#${i}`);
      for (const key in el) {
        console.log(`${key}: ${el[key]}`);
      }
      lastLoggedEntry = i;
      break;
    }
    i++;
  }
}

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
healBtn.addEventListener("click", healPlayerHandler);
logBtn.addEventListener("click", logHandler);
