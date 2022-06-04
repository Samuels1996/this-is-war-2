import React from "react";
import { Health } from "../Health";
import "../../index.css";
import playerImg from "../../images/megaman-thing.png";
import opponentImg from "../../images/dungeon-boss.png";

export const PlayerStats = () => {
  return (
    <div cla>
      <div className="playersText">Player 1</div>
      <div>
        <Health label="HP:" className="w-auto" />
      </div>
      <img src={playerImg} alt="player img" className="w-100" />
    </div>
  );
};

export const OpponentStats = () => {
  return (
    <div>
      <img src={opponentImg} alt="opponent img" className="h-100 w-100" />
      <div className="fightTextBox playersText">The Dark Lord</div>
      <div>
        <Health label="HP:" />
      </div>
    </div>
  );
};
