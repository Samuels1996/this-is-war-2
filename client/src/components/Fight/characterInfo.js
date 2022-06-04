export const playerStats = {
    level: 50,
    maxHealth: 200,
    name: 'Player 1',
    attack: 50,
    defense: 30,
  };
  export const opponentStats = {
    level: 50,
    name: 'The DaRK Lord',
    maxHealth: 200,
    attack: 32,
    defense: 20,
  };

  export const wait = ms =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, ms);
  });

export const attack = ({ attacker, receiver }) => {
  const receivedDamage =
    attacker.attack - (attacker.level - receiver.level) * 2.5;

  const finalDamage = receivedDamage - receiver.defense / 2;

  return finalDamage;
};
export const defend = ({ attacker, receiver }) => {
  const receivedDamage =
    attacker.defend - (attacker.level - receiver.level) * 2.5;

  const finalDamage = receivedDamage - receiver.defense / 2;

  return finalDamage;
};
