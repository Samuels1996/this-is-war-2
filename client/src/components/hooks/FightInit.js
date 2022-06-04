import {
  attack,
  defend,
  wait,
  playerStats,
  opponentStats,
} from "../Fight/characterInfo";
import { useEffect, useState } from "react";

export default function FightInit( sequence ) {
  console.log(sequence);
  const [turn, setTurn] = useState("");
  const [inSequence, setInSequence] = useState(false);
  const [playerHealth, setPlayerHealth] = useState(playerStats.maxHealth);
  const [opponentHealth, setOpponentHealth] = useState(opponentStats.maxHealth);
  const [announcerMessage, setAnnouncerMessage] = useState("");

  const [playerAnimation, setPlayerAnimation] = useState("static");
  const [opponentAnimation, setOpponentAnimation] = useState("static");

  useEffect(() => {
    const { mode, turn } = sequence;

    if (mode) {
      const attacker = turn === 0 ? playerStats : opponentStats;
      const receiver = turn === 0 ? opponentStats : playerStats;

      switch (mode) {
        case "attack": {
          const damage = attack({ attacker, receiver });

          (async () => {
            setInSequence(true);
            setAnnouncerMessage(`${attacker.name} has chosen to attack!`);
            await wait(1000);

            turn === 0
              ? setOpponentAnimation("static")
              : setPlayerAnimation("static");
            setAnnouncerMessage(`${receiver.name} is in pain!`);
            turn === 0
              ? setOpponentHealth((h) => (h - damage > 0 ? h - damage : 0))
              : setPlayerHealth((h) => (h - damage > 0 ? h - damage : 0));
            await wait(2000);

            setAnnouncerMessage(`Now it's ${receiver.name} turn!`);
            await wait(1500);

            setTurn(turn === 0 ? 1 : 0);
            setInSequence(false);
          })();

          break;
        }

        case "defend": {
          const damage = defend({ attacker, receiver });

          (async () => {
            setInSequence(true);
            setAnnouncerMessage(`${attacker.name} has hit with shield!`);
            await wait(1000);


            turn === 0
              ? setOpponentAnimation("static")
              : setPlayerAnimation("static");
            setAnnouncerMessage(`${receiver.name} is in pain!`);
            turn === 0
              ? setOpponentHealth((h) => (h - damage > 0 ? h - damage : 0))
              : setPlayerHealth((h) => (h - damage > 0 ? h - damage : 0));
            await wait(2500);

            setAnnouncerMessage(`Now it's ${receiver.name}'s turn!`);
            await wait(1500);

            setTurn(turn === 0 ? 1 : 0);
            setInSequence(false);
          })();

          break;
        }

        default:
          break;
      }
    }
  }, [sequence]);

  return {
    turn,
    inSequence,
    playerHealth,
    opponentHealth,
    playerAnimation,
    opponentAnimation,
    announcerMessage,
  };
}