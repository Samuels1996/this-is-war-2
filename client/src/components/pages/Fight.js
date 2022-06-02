//directs to fightchoose
import React from "react";
import { Link } from "react-router-dom";
import { FightOptions } from "../FightOptions";
import  FightStuff  from "../Fight";
import { PlayerStat, PlayerStats } from "../PlayerStats";

export default function Fight() {
    return ( 
        <div>
            <Link to='/fightchoice'>Choose Fight</Link>
            <div className="playerCards">Fight!</div>
            <div className="playerCards">
                <PlayerStats />
            </div>
            <div className="playerCards"><PlayerStats /></div>
            <FightOptions 
            onAttack={() => console.log('Attack')}
            onDefend={() => console.log('Defend')} />
        </div>
    )
}