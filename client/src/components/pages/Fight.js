//directs to fightchoose
import React from "react";
import { Link } from "react-router-dom";
import { FightOptions } from "../FightOptions";
import  FightStuff  from "../Fight";
import { OpponentStats, PlayerStats } from "../PlayerStats";
import '../../index.css'

export default function Fight() {
    return ( 
        <div>
            <div className="fightCard">Fight!</div>
            <div className="playerCards">
                <PlayerStats />
            </div>
            <div className="playerCards">
                <OpponentStats />
            </div>
            <FightOptions 
            onAttack={() => console.log('Attack')}
            onDefend={() => console.log('Defend')} />
        </div>
    )
}