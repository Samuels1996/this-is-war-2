import React from "react";
import { FightOptions } from "../FightOptions";
import { PlayerStats, OpponentStats } from "../PlayerStats";
import "../../index.css";
import FightInit from "../hooks/FightInit";
import OpponentMoves from "../hooks/OpponentMoves";
import { opponentStats, playerStats, wait } from "../Fight/characterInfo";
import { useEffect, useState } from "react";

export default function Fight({ onGameEnd }) {
  const [sequence, setSequence] = useState({});

  const { turn, inSequence, playerHealth, opponentHealth } =
    FightInit(sequence);

  const aiChoice = OpponentMoves(turn);

  useEffect(() => {
    if (aiChoice && turn === 1 && !inSequence) {
      setSequence({ turn, mode: aiChoice });
    }
  }, [turn, aiChoice, inSequence]);

  useEffect(() => {
    if (playerHealth === 0 || opponentHealth === 0) {
      (async () => {
        await wait(1000);
        onGameEnd(playerHealth === 0 ? opponentStats : playerStats);
      })();
    }
  }, [playerHealth, opponentHealth, onGameEnd]);

  return (
    <>
      <div className="row m-4">
        <div className="fightCard">Fight!</div>
        <div className="col-5 m-auto mb-2">
          <PlayerStats
            health={opponentHealth}
            name={opponentStats.name}
            level={opponentStats.level}
            maxHealth={opponentStats.maxHealth}
          />
        </div>

        <div className="col-5 m-auto mb-2">
          <OpponentStats
            health={playerHealth}
            name={playerStats.name}
            level={playerStats.level}
            maxHealth={playerStats.maxHealth}
          />
        </div>
      </div>
      <div>
        {/* {!inSequence && turn === 0 && ( */}
        <div>
          <FightOptions
            onDefend={() => setSequence({ mode: "defend", turn })}
            onAttack={() => setSequence({ mode: "attack", turn })}
          />
        </div>
      </div>
    </>
  );
}
